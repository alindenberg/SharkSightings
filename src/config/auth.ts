import jwt from "express-jwt"
import jwksRsa from "jwks-rsa"

const authConfig = {
  domain: "https://dev-b36cotoe.auth0.com",
  audience: "https://sportsbackend.xyz"
}

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: authConfig.domain,
  algorithm: ["RS256"]
});

export default jwtCheck;