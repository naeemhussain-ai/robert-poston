import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type PropsWithChildren,
} from "react";

const appBase = import.meta.env.BASE_URL.replace(/\/$/, "");

type RouteState = {
  path: string;
  params: Record<string, string>;
};

const RouteStateContext = createContext<RouteState>({
  path: "/",
  params: {},
});

export function getCurrentPath() {
  if (typeof window === "undefined") return "/";
  const pathname = window.location.pathname || "/";
  if (!appBase || appBase === "/") return pathname;
  if (pathname === appBase) return "/";
  if (pathname.startsWith(`${appBase}/`)) {
    return pathname.slice(appBase.length) || "/";
  }
  return pathname;
}

export function buildPath(to: string, params?: Record<string, string>) {
  if (!params) return to;
  return to.replace(/\$([A-Za-z0-9_]+)/g, (_, key: string) => {
    const value = params[key];
    return value ? encodeURIComponent(value) : "";
  });
}

export function buildHash(hash?: string) {
  if (!hash) return "";
  return hash.startsWith("#") ? hash : `#${hash}`;
}

export function navigateTo(path: string, hash?: string, replace = false) {
  if (typeof window === "undefined") return;
  const method = replace ? "replaceState" : "pushState";
  const targetPath = path === "/" ? `${appBase || ""}/` : `${appBase}${path}`;
  const targetHash = buildHash(hash);
  window.history[method](null, "", `${targetPath}${targetHash}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
  if (targetHash) {
    window.setTimeout(() => {
      document.getElementById(targetHash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function matchPath(pattern: string, path: string) {
  if (pattern === path) return {};

  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = path.split("/").filter(Boolean);

  if (patternParts.length !== pathParts.length) return null;

  const params: Record<string, string> = {};

  for (let i = 0; i < patternParts.length; i += 1) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];

    if (!patternPart || !pathPart) return null;

    if (patternPart.startsWith("$")) {
      params[patternPart.slice(1)] = decodeURIComponent(pathPart);
      continue;
    }

    if (patternPart !== pathPart) return null;
  }

  return params;
}

export function RouteStateProvider({
  path,
  params,
  children,
}: PropsWithChildren<RouteState>) {
  const value = useMemo(() => ({ path, params }), [params, path]);
  return <RouteStateContext.Provider value={value}>{children}</RouteStateContext.Provider>;
}

export function useCurrentLocation() {
  const [location, setLocation] = useState(() => ({
    path: getCurrentPath(),
    hash: typeof window === "undefined" ? "" : window.location.hash,
  }));

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation({
        path: getCurrentPath(),
        hash: window.location.hash,
      });
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return location;
}

export function useCurrentPath() {
  return useCurrentLocation().path;
}

export function useRouteParams<T extends Record<string, string>>() {
  return useContext(RouteStateContext).params as T;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  params?: Record<string, string>;
  hash?: string;
  activeOptions?: { exact?: boolean };
};

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

export function Link({
  to,
  params,
  hash,
  activeOptions,
  className,
  onClick,
  target,
  children,
  ...rest
}: LinkProps) {
  const currentPath = useCurrentPath();
  const hrefPath = buildPath(to, params);
  const href = `${appBase || ""}${hrefPath}${buildHash(hash)}`;
  const isActive = activeOptions?.exact
    ? currentPath === hrefPath
    : hrefPath === "/"
      ? currentPath === "/"
      : currentPath.startsWith(hrefPath);

  return (
    <a
      {...rest}
      href={href}
      target={target}
      data-status={isActive ? "active" : "inactive"}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          isModifiedEvent(event) ||
          target === "_blank" ||
          !hrefPath.startsWith("/")
        ) {
          return;
        }

        event.preventDefault();
        navigateTo(hrefPath, hash);
      }}
    >
      {children}
    </a>
  );
}
