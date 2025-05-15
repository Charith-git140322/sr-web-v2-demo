// API
export const API_BASE_URL_PRODUCTION = "https://api.studyreserve.com";
export const API_BASE_URL_DEVELOPMENT = "http://localhost:8085";

export const API_BASE_URL =
  process.env.NODE_ENV !== "development"
    ? API_BASE_URL_DEVELOPMENT
    : API_BASE_URL_PRODUCTION;

export const IMAGE_BASE_URL = "https://stdyrsrv2.sgp1.digitaloceanspaces.com";

/**Start of Html IDs*/
export const DASHBOARD_SECTION_ID = "#dashboard";
/**End of Html IDs*/
