import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./searchContext";
import HomePage from "./pages/HomePage";
import FiguresPage from "./pages/FiguresPage";
import InstructionPage from "./pages/InstructionPage";
import BasicFormsPage from "./pages/BasicFormsPage";
import SearchResult from "./pages/SearchResult";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Header className="max-w-5xl mx-auto" />

        <main className="max-w-5xl mx-auto">
          <div className="max-w-5xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/all-figures" element={<FiguresPage />} />
              <Route path="/instruction/:id" element={<InstructionPage />} />
              <Route path="/basic-forms" element={<BasicFormsPage />} />
              <Route path="/search" element={<SearchResult />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
}
