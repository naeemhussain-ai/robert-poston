import { useEffect, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CursorSpotlight, ScrollProgress } from "@/components/lux";
import { RouteStateProvider, matchPath, useCurrentLocation } from "@/lib/router";
import { AboutPage } from "@/routes/about";
import { BookPage } from "@/routes/book";
import { ContactPage } from "@/routes/contact";
import { GalleryPage } from "@/routes/gallery";
import { HomePage } from "@/routes/index";

type RouteDefinition = {
  path: string;
  title: string;
  component: ComponentType;
};

const routes: RouteDefinition[] = [
  { path: "/", title: "When One Door Opens | Robert Poston", component: HomePage },
  { path: "/about", title: "About Robert Poston | When One Door Opens", component: AboutPage },
  { path: "/book", title: "About the Book | When One Door Opens", component: BookPage },
  { path: "/gallery", title: "Gallery | When One Door Opens", component: GalleryPage },
  { path: "/contact", title: "Contact | Robert Poston", component: ContactPage },
];

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}

function DocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

function RoutedPage() {
  const location = useCurrentLocation();

  for (const route of routes) {
    const params = matchPath(route.path, location.path);
    if (!params) continue;

    const Page = route.component;

    return (
      <RouteStateProvider path={location.path} params={params}>
        <DocumentTitle title={route.title} />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Page />
          </motion.main>
        </AnimatePresence>
      </RouteStateProvider>
    );
  }

  return (
      <RouteStateProvider path={location.path} params={{}}>
      <DocumentTitle title="Page Not Found | When One Door Opens" />
      <main>
        <NotFoundPage />
      </main>
    </RouteStateProvider>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      <SiteHeader />
      <RoutedPage />
      <SiteFooter />
    </>
  );
}
