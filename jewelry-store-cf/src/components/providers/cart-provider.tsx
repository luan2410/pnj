"use client";

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react";

import type { CatalogProduct } from "@/lib/server/catalog";
import { coupons, reviewsBySlug } from "@/lib/site-data";

type CartItem = {
  slug: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
  material?: string;
};

type CheckoutDetails = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  note: string;
};

type OrderRecord = {
  id: string;
  createdAt: string;
  items: CartItem[];
  total: number;
  customer: CheckoutDetails;
  status: "PENDING" | "CONFIRMED";
};

type ReviewRecord = {
  name: string;
  rating: number;
  content: string;
};

type SessionUser = {
  name: string;
  email: string;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  total: number;
  discountAmount: number;
  appliedCoupon: string | null;
  checkoutDetails: CheckoutDetails;
  wishlist: string[];
  orders: OrderRecord[];
  sessionUser: SessionUser | null;
  isHydrated: boolean;
  addItem: (product: CatalogProduct) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  updateCheckoutDetails: (payload: Partial<CheckoutDetails>) => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  placeOrder: () => OrderRecord | null;
  applyCoupon: (code: string) => boolean;
  clearCoupon: () => void;
  getReviews: (slug: string) => ReviewRecord[];
  signInDemo: (user: SessionUser) => void;
  signOutDemo: () => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "maison-aurum-cart";
const CHECKOUT_STORAGE_KEY = "maison-aurum-checkout";
const WISHLIST_STORAGE_KEY = "maison-aurum-wishlist";
const ORDERS_STORAGE_KEY = "maison-aurum-orders";
const COUPON_STORAGE_KEY = "maison-aurum-coupon";
const SESSION_STORAGE_KEY = "maison-aurum-session";

const CartContext = createContext<CartContextValue | null>(null);

const defaultCheckoutDetails: CheckoutDetails = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  note: "",
};

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function parsePrice(price: string) {
  const numeric = price.replace(/[^\d]/g, "");
  return Number(numeric || 0);
}

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const isHydrated = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
  const [items, setItems] = useState<CartItem[]>(() => readStorage(CART_STORAGE_KEY, [] as CartItem[]));
  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>(() =>
    readStorage(CHECKOUT_STORAGE_KEY, defaultCheckoutDetails),
  );
  const [wishlist, setWishlist] = useState<string[]>(() => readStorage(WISHLIST_STORAGE_KEY, [] as string[]));
  const [orders, setOrders] = useState<OrderRecord[]>(() => readStorage(ORDERS_STORAGE_KEY, [] as OrderRecord[]));
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() => readStorage(COUPON_STORAGE_KEY, null));
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(() => readStorage(SESSION_STORAGE_KEY, null));

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [isHydrated, items]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(checkoutDetails));
  }, [checkoutDetails, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  }, [isHydrated, wishlist]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [isHydrated, orders]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(appliedCoupon));
  }, [appliedCoupon, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
  }, [isHydrated, sessionUser]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
    const matchedCoupon = coupons.find((coupon) => coupon.code === appliedCoupon);
    const discountAmount = matchedCoupon
      ? matchedCoupon.type === "percent"
        ? Math.floor((subtotal * matchedCoupon.value) / 100)
        : matchedCoupon.value
      : 0;
    const total = Math.max(0, subtotal - discountAmount);

    return {
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      total,
      discountAmount,
      appliedCoupon,
      checkoutDetails,
      wishlist,
      orders,
      sessionUser,
      isHydrated,
      addItem: (product) => {
        setItems((current) => {
          const existing = current.find((item) => item.slug === product.slug);
          if (existing) {
            return current.map((item) =>
              item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }

          return [
            ...current,
            {
              slug: product.slug,
              name: product.name,
              category: product.category,
              price: product.price,
              quantity: 1,
              material: product.material,
            },
          ];
        });
      },
      removeItem: (slug) => setItems((current) => current.filter((item) => item.slug !== slug)),
      updateQuantity: (slug, quantity) =>
        setItems((current) =>
          current.map((item) => (item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item)),
        ),
      updateCheckoutDetails: (payload) =>
        setCheckoutDetails((current) => ({
          ...current,
          ...payload,
        })),
      toggleWishlist: (slug) =>
        setWishlist((current) =>
          current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
        ),
      isWishlisted: (slug) => wishlist.includes(slug),
      placeOrder: () => {
        if (!items.length) {
          return null;
        }

        const order: OrderRecord = {
          id: `MA-${Date.now()}`,
          createdAt: new Date().toISOString(),
          items,
          total,
          customer: checkoutDetails,
          status: "PENDING",
        };

        setOrders((current) => [order, ...current]);
        setItems([]);
        setAppliedCoupon(null);
        return order;
      },
      applyCoupon: (code) => {
        const normalized = code.trim().toUpperCase();
        const exists = coupons.some((coupon) => coupon.code === normalized);
        if (exists) {
          setAppliedCoupon(normalized);
        }
        return exists;
      },
      clearCoupon: () => setAppliedCoupon(null),
      getReviews: (slug) => [...(reviewsBySlug[slug as keyof typeof reviewsBySlug] ?? [])],
      signInDemo: (user) => setSessionUser(user),
      signOutDemo: () => setSessionUser(null),
      clearCart: () => setItems([]),
    };
  }, [appliedCoupon, checkoutDetails, isHydrated, items, orders, sessionUser, wishlist]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}