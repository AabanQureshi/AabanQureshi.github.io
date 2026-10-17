import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ProjectsPage, ProjectPage, CertificatesPage, ServicesPage, FeedbackPage, AboutPage, AIServicePage } from './components/portfolio/PortfolioPages';

const queryClient = new QueryClient();

export const PortfolioRoutes = () => <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/projects/:slug" element={<ProjectPage />} />
  <Route path="/certificates" element={<CertificatesPage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/ai-engineering" element={<AIServicePage kind="engineering" />} />
  <Route path="/workflow-automation" element={<AIServicePage kind="automation" />} />
  <Route path="/feedback" element={<FeedbackPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PortfolioRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
