import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CertificatePage from "./pages/CertificatePage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const getBasename = () => {
  try {
    const mode = import.meta.env.MODE;
    const baseUrl = import.meta.env.BASE_URL;
    return mode === 'production' ? baseUrl : '/';
  } catch (error) {
    // defensive fallback
    console.error('Error getting base URL:', error);
    return '/';
  }
};

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* Use a production basename only when built for production.
              This lets `npm run dev` on localhost serve routes at `/`.
            */}
          <BrowserRouter basename={getBasename()}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/certificate/:id" element={<CertificatePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
