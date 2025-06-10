export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.codeqr.io";

export const GOOGLE_FAVICON_URL =
  "https://www.google.com/s2/favicons?sz=64&domain_url=";
export const FAVICON_FOLDER = "/_static/favicons";
export const OG_AVATAR_URL = "https://api.codeqr.io/og/avatar?seed=";

export const DICEBEAR_AVATAR_URL =
  "https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&fontFamily=Helvetica&fontSize=40&seed=";
export const PAGINATION_LIMIT = 100;

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);
export const SPECIAL_APEX_DOMAINS = new Set([
  "my.id",
  "github.io",
  "vercel.app",
  "now.sh",
  "pages.dev",
  "webflow.io",
  "netlify.app",
  "fly.dev",
  "web.app",
]);

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};
