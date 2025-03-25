
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lounge from "./pages/Lounge";
import Mafia from "./pages/Mafia";
import Billiards from "./pages/Billiards";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lounge" element={<Lounge />} />
              <Route path="/mafia" element={<Mafia />} />
              <Route path="/billiards" element={<Billiards />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
