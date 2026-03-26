const backendDomain =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://103.57.222.79:8105";

const baseConfig = {
  backendDomain,
  frontendDomain:
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000",
  imageDomain: `${backendDomain}/uploads`,
};

export default baseConfig;
