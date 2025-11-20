import { Link } from "react-router-dom";

function Header({ current, onChange }) {
  const btn =
    "px-3 py-1 text-sm md:text-base rounded-full hover:bg-white/60 transition";
  const active = "bg-white/80 font-semibold";

  return (
    <header>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-[15px] gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-end logo gap-[25px]">
            <img height={100} width={132} src="/images/logo.png" />
            <div className="text-4xl mb-2">MagicFold</div>
          </div>
        </Link>
        <nav className="flex gap-[38px] mb-4 max-lg:hidden">
          <Link to="/figures">Все фигуры</Link>
          <Link to="/basic-forms">Базовые формы</Link>
          <div className="flex gap-3">
            <span>Поиск</span>
            <input className="h-[21px] rounded-md" type="search" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
