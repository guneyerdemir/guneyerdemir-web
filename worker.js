export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www.guneyerdemir.com to canonical apex domain guneyerdemir.com (HTTP 301)
    if (url.hostname === "www.guneyerdemir.com") {
      url.hostname = "guneyerdemir.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  }
};
