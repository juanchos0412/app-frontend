import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_DuOnOg-Q.mjs';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/app-frontend/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const d=document.querySelectorAll(\".edit-link\"),e=document.getElementById(\"edit-form-container\"),o=document.getElementById(\"user-name\"),s=document.querySelector(\".cancel-button\");d.forEach(t=>{t.addEventListener(\"click\",function(n){n.preventDefault();const c=this.dataset.user;o.value=c,e.classList.remove(\"hidden\")})});s.addEventListener(\"click\",function(){e.classList.add(\"hidden\")});\n"}],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".list-container[data-astro-cid-2zp6q64z]{background-color:#40e0d0;padding:20px;border-radius:5px;width:100%;max-width:600px}.user-list[data-astro-cid-2zp6q64z]{list-style-type:none;padding:0}.user-item[data-astro-cid-2zp6q64z]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.user-name[data-astro-cid-2zp6q64z]{color:#333}.user-link[data-astro-cid-2zp6q64z]{color:#00e;text-decoration:none;display:flex;align-items:center}.container-buttons-list[data-astro-cid-2zp6q64z]{display:flex;align-items:center}.button-container[data-astro-cid-2zp6q64z]{display:flex;justify-content:center}.next-button[data-astro-cid-2zp6q64z]{background-color:#fff;color:#333;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;margin:20px auto auto}.next-button[data-astro-cid-2zp6q64z]:hover{background-color:#333;color:#fff}.next-button[data-astro-cid-2zp6q64z]:after{content:\">\";margin-left:5px}#edit-form-container[data-astro-cid-2zp6q64z]{background-color:#fff;padding:20px;border-radius:5px;max-width:400px;margin-top:20px}.hidden[data-astro-cid-2zp6q64z]{display:none}.save-button[data-astro-cid-2zp6q64z],.cancel-button[data-astro-cid-2zp6q64z]{background-color:#fff;color:#333;border:1px solid #333;padding:10px 20px;border-radius:5px;cursor:pointer;margin-right:10px}.save-button[data-astro-cid-2zp6q64z]:hover,.cancel-button[data-astro-cid-2zp6q64z]:hover{background-color:#333;color:#fff}\n"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".access-denied-container[data-astro-cid-rvzmxau6]{padding:20px;border-radius:5px;max-width:400px;margin:auto;height:80vh;display:flex;flex-direction:column;justify-content:center}h1[data-astro-cid-rvzmxau6]{color:#333;text-align:center;margin-bottom:20px;font-size:35px;font-weight:700}.lock-icon[data-astro-cid-rvzmxau6]{font-size:48px;margin-bottom:20px;text-align:center}p[data-astro-cid-rvzmxau6]{margin-bottom:20px;color:#333}a[data-astro-cid-rvzmxau6]{color:#00e;text-decoration:none}a[data-astro-cid-rvzmxau6]:hover{text-decoration:underline}\n"}],"routeData":{"route":"/auth/denied","isIndex":false,"type":"page","pattern":"^\\/auth\\/denied\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"denied","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/denied.astro","pathname":"/auth/denied","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".login-container[data-astro-cid-j7y7d5ql]{background-color:#40e0d0;padding:20px;border-radius:5px;max-width:300px;margin:auto;height:80vh;display:flex;flex-direction:column;justify-content:center}h1[data-astro-cid-j7y7d5ql]{color:#333;text-align:center}form[data-astro-cid-j7y7d5ql]{display:flex;flex-direction:column}label[data-astro-cid-j7y7d5ql]{margin-bottom:5px;color:#333}input[data-astro-cid-j7y7d5ql]{padding:10px;margin-bottom:10px;border:none;border-radius:3px;color:#333}button[data-astro-cid-j7y7d5ql]{padding:10px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer}button[data-astro-cid-j7y7d5ql]:hover{background-color:#2980b9}.signup[data-astro-cid-j7y7d5ql]{text-align:center;margin-top:10px;color:#333}.signup[data-astro-cid-j7y7d5ql] a[data-astro-cid-j7y7d5ql]{color:#3498db;text-decoration:none}\n"}],"routeData":{"route":"/auth/login","isIndex":false,"type":"page","pattern":"^\\/auth\\/login\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/login.astro","pathname":"/auth/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".protected-container[data-astro-cid-7toyhf24]{padding:20px;border-radius:5px;max-width:400px;margin:auto;height:80vh;display:flex;flex-direction:column;justify-content:center}h1[data-astro-cid-7toyhf24]{color:#333;text-align:center;margin-bottom:20px;font-size:35px;font-weight:700}.lock-icon[data-astro-cid-7toyhf24]{font-size:72px;margin-bottom:20px;text-align:center}form[data-astro-cid-7toyhf24]{display:flex;flex-direction:column}input[data-astro-cid-7toyhf24][type=password]{padding:10px;margin-bottom:10px;border:none;border-radius:3px}button[data-astro-cid-7toyhf24]{padding:10px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer}button[data-astro-cid-7toyhf24]:hover{background-color:#2980b9}\n"}],"routeData":{"route":"/auth/protected","isIndex":false,"type":"page","pattern":"^\\/auth\\/protected\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"protected","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/protected.astro","pathname":"/auth/protected","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".reset-container[data-astro-cid-nfmenp2a]{padding:20px;border-radius:5px;max-width:400px;margin:auto}h1[data-astro-cid-nfmenp2a]{color:#333;text-align:center;margin-bottom:20px;font-size:35px;font-weight:700}form[data-astro-cid-nfmenp2a]{display:flex;flex-direction:column}label[data-astro-cid-nfmenp2a]{margin-bottom:5px;color:#333}input[data-astro-cid-nfmenp2a][type=email]{padding:10px;margin-bottom:10px;border:none;border-radius:3px;color:#333}button[data-astro-cid-nfmenp2a]{padding:10px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer;margin-top:10px}button[data-astro-cid-nfmenp2a]:hover{background-color:#2980b9}\n"}],"routeData":{"route":"/auth/reset-pass","isIndex":false,"type":"page","pattern":"^\\/auth\\/reset-pass\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"reset-pass","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/reset-pass.astro","pathname":"/auth/reset-pass","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".signup-container[data-astro-cid-kdxkabtv]{padding:20px;border-radius:5px;max-width:400px;margin:auto}h1[data-astro-cid-kdxkabtv]{color:#333;text-align:center;margin-bottom:20px;font-size:35px;font-weight:700}form[data-astro-cid-kdxkabtv]{display:flex;flex-direction:column}label[data-astro-cid-kdxkabtv]{margin-bottom:5px;color:#333}input[data-astro-cid-kdxkabtv][type=email],input[data-astro-cid-kdxkabtv][type=text],input[data-astro-cid-kdxkabtv][type=password]{padding:10px;margin-bottom:10px;border:none;border-radius:3px;color:#333}.checkbox-container[data-astro-cid-kdxkabtv]{display:flex;align-items:flex-start;margin-bottom:10px}input[data-astro-cid-kdxkabtv][type=checkbox]{margin-right:10px;margin-top:3px}button[data-astro-cid-kdxkabtv]{padding:10px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer;margin-top:10px}button[data-astro-cid-kdxkabtv]:hover{background-color:#2980b9}.login[data-astro-cid-kdxkabtv]{text-align:center;margin-top:10px;color:#333}.login[data-astro-cid-kdxkabtv] a[data-astro-cid-kdxkabtv]{color:#3498db;text-decoration:none}\n"}],"routeData":{"route":"/auth/singup","isIndex":false,"type":"page","pattern":"^\\/auth\\/singup\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"singup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/singup.astro","pathname":"/auth/singup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".update-container[data-astro-cid-iehuxp52]{padding:20px;border-radius:5px;max-width:400px;margin:auto}h1[data-astro-cid-iehuxp52]{color:#333;text-align:center;margin-bottom:20px;font-size:35px;font-weight:700}p[data-astro-cid-iehuxp52]{color:#333;margin-bottom:20px}form[data-astro-cid-iehuxp52]{display:flex;flex-direction:column}label[data-astro-cid-iehuxp52]{margin-bottom:5px;color:#333}input[data-astro-cid-iehuxp52][type=password]{padding:10px;margin-bottom:10px;border:none;border-radius:3px;color:#333}button[data-astro-cid-iehuxp52]{padding:10px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer;margin-top:10px}button[data-astro-cid-iehuxp52]:hover{background-color:#2980b9}\n"}],"routeData":{"route":"/auth/update-pass","isIndex":false,"type":"page","pattern":"^\\/auth\\/update-pass\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"update-pass","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/update-pass.astro","pathname":"/auth/update-pass","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".contact-container[data-astro-cid-2mxdoeuz]{padding:40px;border-radius:8px;width:100%;max-width:600px;margin:0 auto}h1[data-astro-cid-2mxdoeuz]{font-size:2rem;margin-bottom:20px;text-align:center;font-weight:700;color:#333}p[data-astro-cid-2mxdoeuz]{font-size:1.2rem;text-align:center;margin-bottom:30px;color:#333}.contact-form[data-astro-cid-2mxdoeuz]{display:flex;flex-direction:column}label[data-astro-cid-2mxdoeuz]{margin-bottom:10px;color:#333}input[data-astro-cid-2mxdoeuz],textarea[data-astro-cid-2mxdoeuz]{padding:10px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px;font-size:1rem;width:100%}.submit-button[data-astro-cid-2mxdoeuz]{background-color:#fff;color:#333;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:1rem}.submit-button[data-astro-cid-2mxdoeuz]:hover{background-color:#333;color:#fff}\n"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".account-container[data-astro-cid-kxcttix5]{background-color:#40e0d0;padding:20px;border-radius:5px;width:100%;max-width:600px;color:#333}h1[data-astro-cid-kxcttix5]{color:#333;margin-bottom:20px;font-size:35px;font-weight:700}h3[data-astro-cid-kxcttix5]{color:#333;margin-bottom:10px;font-size:20px;font-weight:700}form[data-astro-cid-kxcttix5]{display:flex;flex-direction:column}label[data-astro-cid-kxcttix5]{margin-bottom:5px;color:#333}input[data-astro-cid-kxcttix5][type=email],input[data-astro-cid-kxcttix5][type=text]{padding:10px;margin-bottom:15px;border:none;border-radius:3px}.password-section[data-astro-cid-kxcttix5]{margin-bottom:15px}.password-section[data-astro-cid-kxcttix5] a[data-astro-cid-kxcttix5]{color:#00e;text-decoration:none}.checkbox-container[data-astro-cid-kxcttix5]{display:flex;align-items:center;margin-bottom:15px}input[data-astro-cid-kxcttix5][type=checkbox]{margin-right:10px}.button-container[data-astro-cid-kxcttix5]{display:flex;gap:10px}button[data-astro-cid-kxcttix5]{padding:10px 20px;border:none;border-radius:3px;cursor:pointer}button[data-astro-cid-kxcttix5][type=submit]{background-color:#3498db;color:#fff}button[data-astro-cid-kxcttix5][type=button]{background-color:#e0e0e0;color:#333}\n"}],"routeData":{"route":"/cuenta","isIndex":false,"type":"page","pattern":"^\\/cuenta\\/?$","segments":[[{"content":"cuenta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cuenta.astro","pathname":"/cuenta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.BMTquWRT.css"},{"type":"inline","content":".container[data-astro-cid-j7pv25f6]{max-width:800px;margin:0 auto;padding:20px;text-align:center}.logo[data-astro-cid-j7pv25f6]{font-size:48px;font-weight:700;border:2px solid white;padding:10px 20px;display:inline-block;margin-bottom:20px}input[data-astro-cid-j7pv25f6][type=email]{width:100%;padding:10px;margin-bottom:10px;border:none}button[data-astro-cid-j7pv25f6]{background-color:#fff;color:#40e0d0;border:none;padding:10px 20px;cursor:pointer;width:100%}.login-link[data-astro-cid-j7pv25f6]{margin-top:20px}.login-link[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{color:#333;text-decoration:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/app-frontend/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/denied.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/login.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/protected.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/reset-pass.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/singup.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/auth/update-pass.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/cuenta.astro",{"propagation":"none","containsHead":true}],["/home/user/app-frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/auth/denied@_@astro":"pages/auth/denied.astro.mjs","\u0000@astro-page:src/pages/auth/login@_@astro":"pages/auth/login.astro.mjs","\u0000@astro-page:src/pages/auth/protected@_@astro":"pages/auth/protected.astro.mjs","\u0000@astro-page:src/pages/auth/reset-pass@_@astro":"pages/auth/reset-pass.astro.mjs","\u0000@astro-page:src/pages/auth/singup@_@astro":"pages/auth/singup.astro.mjs","\u0000@astro-page:src/pages/auth/update-pass@_@astro":"pages/auth/update-pass.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/cuenta@_@astro":"pages/cuenta.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B6ZNi_Fg.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CL0SxOxc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/admin.BMTquWRT.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ZZZjyvNE/QmRHWWcsx0z2EV+EVa0IgrfMdDCTMyWt18=","experimentalEnvGetSecretEnabled":false});

export { manifest };
