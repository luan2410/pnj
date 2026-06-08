export const siteConfig = {
  name: "Maison Aurum",
  description:
    "Premium jewelry storefront built from the NextJS Material Kit visual language and prepared for Cloudflare Workers.",
  navigation: [
    { label: "Trang chủ", href: "/" },
    { label: "Bộ sưu tập", href: "/collections" },
    { label: "Cửa hàng", href: "/shop" },
    { label: "Quà tặng", href: "/gifting" },
    { label: "Tư vấn", href: "/contact" },
  ],
  stats: [
    { label: "Nghệ nhân đồng hành", value: "18+" },
    { label: "Thiết kế độc bản mỗi tháng", value: "45" },
    { label: "Khách hàng quay lại", value: "92%" },
  ],
  highlights: [
    "Tư vấn riêng tại showroom hoặc trực tuyến",
    "Chế tác theo ngân sách và câu chuyện cá nhân",
    "Đóng gói quà tặng cao cấp trong 24 giờ",
  ],
};

export const featuredCollections = [
  {
    title: "Haute Bridal",
    description: "Nhẫn cầu hôn và nhẫn cưới chế tác tinh xảo với kim cương tuyển chọn.",
    eyebrow: "Bộ sưu tập 01",
    note: "Thiết kế thanh lịch, dành cho proposal và wedding season.",
  },
  {
    title: "Golden Heirloom",
    description: "Dây chuyền, lắc tay và bông tai vàng mang cảm hứng di sản đương đại.",
    eyebrow: "Bộ sưu tập 02",
    note: "Lý tưởng cho diện hằng ngày nhưng vẫn đủ sang cho tiệc tối.",
  },
  {
    title: "Evening Signature",
    description: "Thiết kế nổi bật dành cho tiệc tối, sự kiện và quà tặng cao cấp.",
    eyebrow: "Bộ sưu tập 03",
    note: "Tập trung vào độ sáng, tỷ lệ đá và hiệu ứng khi lên đèn.",
  },
];

export const products = [
  {
    slug: "radiant-sol-ring",
    name: "Radiant Sol Ring",
    category: "Nhẫn kim cương",
    price: "48.000.000đ",
    material: "Vàng 18K, kim cương lab-grown D/VVS",
    description:
      "Thiết kế halo tối giản với mặt đá trung tâm nổi bật, phù hợp cầu hôn hoặc kỷ niệm cao cấp.",
    details: ["Bảo hành 24 tháng", "Miễn phí chỉnh size lần đầu", "Có chứng nhận đá"],
    accent: "Champagne Gold",
  },
  {
    slug: "aurum-line-necklace",
    name: "Aurum Line Necklace",
    category: "Dây chuyền vàng 18K",
    price: "31.500.000đ",
    material: "Vàng 18K champagne, khóa lobster cao cấp",
    description:
      "Dây chuyền thanh mảnh lấy cảm hứng từ đường nét kiến trúc, dễ phối cho trang phục ngày và đêm.",
    details: ["Đóng gói quà tặng", "Vệ sinh trọn đời", "Có tùy chọn khắc tên"],
    accent: "Soft Pearl",
  },
  {
    slug: "celeste-drop-earrings",
    name: "Celeste Drop Earrings",
    category: "Bông tai đá quý",
    price: "27.800.000đ",
    material: "Vàng trắng 18K, topaz xanh và pavé stones",
    description:
      "Bông tai dáng thả nhẹ, tạo điểm sáng tinh tế cho tiệc tối và sự kiện trang trọng.",
    details: ["Chế tác thủ công", "Hỗ trợ đổi trả 7 ngày", "Tư vấn styling riêng"],
    accent: "Ocean Blue",
  },
] as const;

export const featuredProducts = products;

export const brandPillars = [
  {
    title: "Chứng nhận minh bạch",
    description: "Mỗi sản phẩm đều có thông tin chất liệu, đá quý và chính sách bảo hành rõ ràng.",
  },
  {
    title: "Chế tác theo yêu cầu",
    description: "Thiết kế độc bản theo kích thước, ngân sách và câu chuyện của khách hàng.",
  },
  {
    title: "Trải nghiệm cao cấp",
    description: "Tư vấn riêng, gói quà sang trọng và hậu mãi trọn đời cho các dòng chủ lực.",
  },
];

export const serviceJourney = [
  {
    step: "01",
    title: "Chia sẻ nhu cầu",
    description: "Khách hàng chọn dịp mua, ngân sách và phong cách yêu thích để đội ngũ lên shortlist.",
  },
  {
    step: "02",
    title: "Tư vấn cá nhân hóa",
    description: "Stylist và artisan đề xuất thiết kế, chất liệu, size và gợi ý gói quà phù hợp.",
  },
  {
    step: "03",
    title: "Hoàn thiện & giao nhận",
    description: "Sản phẩm được kiểm định, đóng gói sang trọng và bàn giao kèm hướng dẫn bảo quản.",
  },
];

export const giftingMoments = [
  {
    title: "Proposal & Anniversary",
    description: "Nhẫn, vòng cổ và bộ đôi quà tặng cho những cột mốc cảm xúc quan trọng.",
  },
  {
    title: "Luxury Corporate Gifts",
    description: "Bộ quà khắc tên dành cho khách VIP, đối tác và sự kiện tri ân thương hiệu.",
  },
  {
    title: "Birthday & Celebration",
    description: "Thiết kế nhẹ nhàng, dễ đeo hằng ngày và có thể cá nhân hóa bằng ký tự hoặc charm.",
  },
];

export const contactDetails = {
  showroom: "189 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
  email: "support@maisonaurum.vn",
  phone: "+84 28 9999 8888",
  hours: "10:00 - 21:00 mỗi ngày",
};

export const adminCustomers = [
  {
    name: "Linh Nguyễn",
    segment: "VIP Bridal",
    note: "2 đơn hàng, đang follow-up nhẫn cưới đôi.",
  },
  {
    name: "An Phạm",
    segment: "Corporate Gift",
    note: "Đề nghị báo giá bộ quà tặng 15 phần cho event tháng 7.",
  },
  {
    name: "Minh Trần",
    segment: "High Intent",
    note: "Đã wishlist 3 sản phẩm, cần booking showroom cuối tuần.",
  },
];

export const adminOrders = [
  {
    code: "MA-1001",
    customer: "Linh Nguyễn",
    status: "Chờ xác nhận",
    amount: "48.000.000đ",
  },
  {
    code: "MA-1002",
    customer: "An Phạm",
    status: "Đang chuẩn bị",
    amount: "31.500.000đ",
  },
  {
    code: "MA-1003",
    customer: "Minh Trần",
    status: "Đã giao showroom",
    amount: "27.800.000đ",
  },
];

export const coupons = [
  { code: "AURUM10", label: "Giảm 10% cho đơn đầu tiên", type: "percent", value: 10 },
  { code: "VIP500", label: "Giảm 500.000đ cho khách VIP", type: "fixed", value: 500000 },
];

export const reviewsBySlug = {
  "radiant-sol-ring": [
    { name: "Linh Nguyễn", rating: 5, content: "Đá sáng đẹp, form nhẫn rất thanh lịch và sang." },
    { name: "Hải Anh", rating: 5, content: "Đúng kiểu nhẫn cầu hôn cao cấp, đóng gói cũng rất đẹp." },
  ],
  "aurum-line-necklace": [
    { name: "Vy Trần", rating: 4, content: "Thiết kế tối giản, đeo hằng ngày rất hợp." },
  ],
  "celeste-drop-earrings": [
    { name: "Kim Phạm", rating: 5, content: "Lên tai sáng và sang, hợp đi tiệc tối." },
  ],
} as const;

export const adminStats = [
  { label: "Doanh thu hôm nay", value: "128.5M" },
  { label: "Đơn chờ xử lý", value: "12" },
  { label: "Sản phẩm sắp hết", value: "7" },
  { label: "Khách VIP mới", value: "4" },
];