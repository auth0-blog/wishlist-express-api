import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

const audience: string | undefined = process.env.AUTH0_AUDIENCE;
const domain: string | undefined = process.env.AUTH0_DOMAIN;

if (!audience || !domain) {
  throw new Error("Please make sure that .env is in place and populated");
}

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: domain,
  algorithms: ["RS256"],
});
