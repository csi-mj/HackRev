import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Register from "./pages/Register";
import CodeSurgeAppDev from "./pages/CodeSurgeAppDev";
import Result from "./pages/Result";
import RegisterTrack from "./pages/RegisterTrack";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import Terraview from "./pages/Terraview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="flex-1 pt-20 sm:pt-24 md:pt-28 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Register/:track" element={<RegisterTrack />} />
              <Route path="/registration-success" element={<RegistrationSuccess />} />
              <Route path="/CodeSurgeAppDev" element={<CodeSurgeAppDev />} />
              <Route path="/result" element={<Result />} />
              <Route path="/Terraview" element={<Terraview />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
