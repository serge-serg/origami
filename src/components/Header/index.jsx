import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../searchContext";
import { searchItem } from "../../api";

function Header() {
  const { setSearchQuery, setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();
  async function searchTargetItem(e) {
    if (e.key === "Enter") {
      console.log("Search input value:", e.target.value, e.key);
      const value = e.target.value.trim();
      if (!value) return;

      console.log("Search input value:", value, e.key);

      try {
        const results = await searchItem(value);
        console.log("Search results:", results);

        setSearchQuery(value);
        setSearchResults(results);

        navigate("/search");
      } catch (error) {
        console.error("Error during search:", error);
      }
    }
  }

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
          <Link to="/all-figures">Все фигуры</Link>
          <Link to="/basic-forms">Базовые формы</Link>
          <div className="flex gap-3">
            <span>Поиск</span>
            <input
              onKeyDown={searchTargetItem}
              className="h-[21px] rounded-md px-2"
              type="search"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
