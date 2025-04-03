export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    // Add other protected routes here
  ],
}; 