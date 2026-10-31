export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Redirect www.guneyerdemir.com to canonical apex domain guneyerdemir.com (HTTP 301)
    if (url.hostname === "www.guneyerdemir.com") {
      url.hostname = "guneyerdemir.com";
      return Response.redirect(url.toString(), 301);
    }

    // 2. Convenience redirects
    if (url.pathname === "/cv" || url.pathname === "/cv/") {
      return Response.redirect("https://guneyerdemir.com/cv/ats-cv.html", 302);
    }
    if (url.pathname === "/depom" || url.pathname === "/depom/") {
      return Response.redirect(
        "https://guneyerdemir.com/projects/benim-ikinci-el-depom.html",
        302
      );
    }

    // 3. Serve root path "/" directly from "/index.html" with HTTP 200 OK
    if (url.pathname === "/") {
      const indexUrl = new URL("/index.html", url.origin);
      return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
    }

    return env.ASSETS.fetch(request);
  }
};
