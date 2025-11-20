import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FiguresPage from "./pages/FiguresPage";
import InstructionPage from "./pages/InstructionPage";
import BasicFormsPage from "./pages/BasicFormsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header className="max-w-5xl mx-auto" />

      <main className="max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-figures" element={<FiguresPage />} />
            <Route path="/instruction/:id" element={<InstructionPage />} />
            <Route path="/basic-forms" element={<BasicFormsPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
