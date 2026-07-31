import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  CareersPage,
  ContactPage,
  HomePage,
  HomeOwnershipOpportunitiesPage,
  OpportunityDetailPage,
  HomeReadyPage,
  ImpactPage,
  KnowledgePage,
  MediaPage,
  NotFoundPage,
  WhoWeArePage,
  WorkWithAXPPage,
} from "./axp/Site";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-ownership-opportunities" element={<HomeOwnershipOpportunitiesPage />} />
          <Route path="/opportunities/:slug" element={<OpportunityDetailPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/ecosystem" element={<Navigate to="/who-we-are" replace />} />
          <Route path="/solutions" element={<Navigate to="/home-ownership-opportunities" replace />} />
          <Route path="/homeready" element={<HomeReadyPage />} />
          <Route path="/work-with-axp" element={<WorkWithAXPPage />} />
          <Route path="/partnership-hub" element={<Navigate to="/work-with-axp" replace />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/investors-partners" element={<Navigate to="/work-with-axp" replace />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
