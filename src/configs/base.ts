const backendDomain =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://giangvien.org/ceovcci-backend";

const baseConfig = {
  backendDomain,
  frontendDomain:
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000",
  imageDomain: `${backendDomain}/uploads`,
};

export default baseConfig;
