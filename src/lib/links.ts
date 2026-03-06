const backendHost = "smeq-dev.meucorp.com";

const links = {
  backendHost,
  apiEndpoint: `https://${backendHost}/api/v1.0`,
  storageEndpoint: `https://${backendHost}`,
} as const;

export default links;
