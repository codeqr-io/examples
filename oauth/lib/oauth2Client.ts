import { OAuth2Client } from "@badgateway/oauth2-client";

export const oauth2Client = new OAuth2Client({
  clientId: `${process.env.CODEQR_CLIENT_ID}`,
  clientSecret: `${process.env.CODEQR_CLIENT_SECRET}`,
  authorizationEndpoint: "https://app.codeqr.io/oauth/authorize",
  tokenEndpoint: "https://api.codeqr.io/oauth/token",
});
