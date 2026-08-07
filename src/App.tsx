import { useEffect, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CursorSpotlight, ScrollProgress } from "@/components/lux";
import { RouteStateProvider, matchPath, useCurrentLocation } from "@/lib/router";
import { AboutPage } from "@/routes/about";
import { BookPage } from "@/routes/book";
import { BookDetailPage } from "@/routes/books.$slug";
import { ContactPage } from "@/routes/contact";
import { HomePage } from "@/routes/index";

type RouteDefinition = {
  path: string;
  title: string;
  component: ComponentType;
};

const routes: RouteDefinition[] = [
  { path: "/", title: "The Spirit of Love | A Memoir by Stella Denise Solano", component: HomePage },
  { path: "/about", title: "About Stella Denise Solano | Author of The Spirit of Love", component: AboutPage },
  { path: "/book", title: "The Spirit of Love | The Memoir | Stella Denise Solano", component: BookPage },
  { path: "/contact", title: "Contact | Stella Denise Solano, Author", component: ContactPage },
  { path: "/books/$slug", title: "Book Details | Stella Denise Solano", component: BookDetailPage },
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
      <DocumentTitle title="Page Not Found | Stella Denise Solano" />
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
