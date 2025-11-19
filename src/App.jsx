import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FiguresPage from "./pages/FiguresPage";
import InstructionPage from "./pages/InstructionPage";
import BasicFormsPage from "./pages/BasicFormsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Appрол() {
  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen bg-mf-pink">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/figures" element={<FiguresPage />} />
            <Route path="/instruction/:id" element={<InstructionPage />} />
            <Route path="/basic-forms" element={<BasicFormsPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
