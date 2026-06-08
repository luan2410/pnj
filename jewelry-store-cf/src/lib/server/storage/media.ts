export type MediaAsset = {
  key: string;
  url: string;
  contentType: string;
};

export type UploadTarget = {
  key: string;
  uploadUrl: string;
  publicUrl: string;
};

const bucketName = process.env.R2_PUBLIC_BUCKET_URL ?? "";

function sanitizeFilename(filename: string) {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function createObjectKey(folder: string, filename: string) {
  const safeName = sanitizeFilename(filename || "asset.jpg");
  return `${folder}/${Date.now()}-${safeName}`;
}

export function buildPublicAssetUrl(key: string) {
  if (bucketName) {
    return `${bucketName.replace(/\/$/, "")}/${key}`;
  }

  return `/media/${key}`;
}

export async function createUploadTarget(input: {
  folder: string;
  filename: string;
  contentType: string;
}): Promise<UploadTarget> {
  const key = createObjectKey(input.folder, input.filename);

  return {
    key,
    uploadUrl: `/api/admin/uploads/sign?key=${encodeURIComponent(key)}&contentType=${encodeURIComponent(
      input.contentType,
    )}`,
    publicUrl: buildPublicAssetUrl(key),
  };
}
