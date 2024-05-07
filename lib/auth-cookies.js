import { serialize, parse } from "cookie";

const TOKEN_NAME = "token";
const TOKEN_NAME_ADMIN = "token_a";

export const MAX_AGE = 60 * 60 * 8; // 8 hours

export function setTokenCookie(res, token, isAdmin = false) {
  const token_name = isAdmin ? TOKEN_NAME_ADMIN : TOKEN_NAME;
  const cookie = serialize(token_name, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res, isAdmin) {
  const token_name = isAdmin ? TOKEN_NAME_ADMIN : TOKEN_NAME;
  const cookie = serialize(token_name, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req);
  const token_name = req.isAdmin ? TOKEN_NAME_ADMIN : TOKEN_NAME;
  return cookies[token_name];
}
