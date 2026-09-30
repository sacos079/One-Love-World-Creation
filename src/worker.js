// Cloudflare Worker entry. Static files are served straight from the assets binding;
// only /api/* reaches this code (see run_worker_first in wrangler.jsonc).
import { onRequestPost } from "../functions/api/order.js";

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/order") {
      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
      }
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  },
};
