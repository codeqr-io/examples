import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SECOND_LEVEL_DOMAINS, SPECIAL_APEX_DOMAINS } from "./constants";
import ccTLDs from "./constants/cctlds";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function linkConstructor({
  domain = "expol.ink",
  key,
  path,
  localhost,
  pretty,
  noDomain,
}: {
  domain?: string;
  key?: string;
  path?: string;
  localhost?: boolean;
  pretty?: boolean;
  noDomain?: boolean;
}) {
  const link = `${
    localhost ? "http://test.localhost:8888" : `https://${domain}`
  }${path ? path : ""}${key && key !== "_root" ? `/${key}` : ""}`;

  if (noDomain) return `/${key}`;
  return pretty ? link.replace(/^https?:\/\//, "") : link;
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const getPrettyUrl = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "").replace("www.", "");
};

export const getApexDomain = (url: string) => {
  let domain;
  try {
    // replace any custom scheme (e.g. notion://) with https://
    // use the URL constructor to get the hostname
    domain = new URL(url.replace(/^[a-zA-Z]+:\/\//, "https://")).hostname;
  } catch (e) {
    return "";
  }
  if (domain === "youtu.be") return "youtube.com";
  if (domain === "raw.githubusercontent.com") return "github.com";
  if (domain.endsWith(".vercel.app")) return "vercel.app";

  const parts = domain.split(".");
  if (parts.length > 2) {
    if (
      // if this is a second-level TLD (e.g. co.uk, .com.ua, .org.tt), we need to return the last 3 parts
      (SECOND_LEVEL_DOMAINS.has(parts[parts.length - 2]) &&
        ccTLDs.has(parts[parts.length - 1])) ||
      // if it's a special subdomain for website builders (e.g. weathergpt.vercel.app/)
      SPECIAL_APEX_DOMAINS.has(parts.slice(-2).join("."))
    ) {
      return parts.slice(-3).join(".");
    }
    // otherwise, it's a subdomain (e.g. codeqr.vercel.app), so we return the last 2 parts
    return parts.slice(-2).join(".");
  }
  // if it's a normal domain (e.g. codeqr.io), we return the domain
  return domain;
};
