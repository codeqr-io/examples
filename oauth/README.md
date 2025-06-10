# OAuth Integration Example

CodeQR supports [OAuth 2.0 authentication](https://codeqr.mintlify.app/integrations/quickstart), which is **_recommended_** if you build integrations extending CodeQR’s functionality.

This example demonstrates how to authenticate users with CodeQR OAuth 2.0 flow.

Live demo: https://oauth.codeqr.link

## Getting Started

Follow the steps below to get started:

1. Create a new Integration in your [CodeQR workspace](https://app.codeqr.io/settings/oauth-apps).
2. Fill in all the appropriate fields.
3. Make sure to set your redirect URIs:
   1. Local development: `http://localhost:3000/api/oauth/callback`
   2. Production: `https://yourdomain.com/api/oauth/callback`
4. Copy the `Client ID` and `Client Secret` values and paste them into the `.env` file as `CODEQR_CLIENT_ID` and `CODEQR_CLIENT_SECRET` respectively.
5. Install the dependencies and start the app.
6. Click the **Sign in with CodeQR** button to initiate the OAuth flow.

## Learn More

To learn more about CodeQR's OAuth flow, take a look at the following resources:

- [Integrate with CodeQR](https://codeqr.mintlify.app/integrations/quickstart)
- [API Reference](https://codeqr.mintlify.app/api-reference/introduction)
- [SDKs](https://codeqr.mintlify.app/sdks/overview)
