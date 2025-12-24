import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuiSommesNous from "./pages/QuiSommesNous";
import Valeurs from "./pages/Valeurs";
import Secteurs from "./pages/Secteurs";
import Expertise from "./pages/Expertise";
import References from "./pages/References";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/valeurs" element={<Valeurs />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/prestations" element={<Expertise />} />
          <Route path="/equipe" element={<QuiSommesNous />} />
          <Route path="/references" element={<References />} />
          <Route path="/partenaires" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
