import { Link } from "react-router-dom";

function Header({ current, onChange }) {
  const btn =
    "px-3 py-1 text-sm md:text-base rounded-full hover:bg-white/60 transition";
  const active = "bg-white/80 font-semibold";

  return (
    <header className="bg-mf-pink border-b border-black/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gray-300" />
          <span className="font-semibold text-lg">MagicFold</span>
        </div>
        <nav className="flex gap-2 text-xs md:text-sm">
          <Link to="/">Главная</Link>
          <Link to="/figures">Все фигуры</Link>
          <Link to="/instruction/1">Инструкция</Link>
          <Link to="/basic-forms">Базовые формы</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
