import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../searchContext";

function SearchResultsPage() {
  const { searchResults } = useContext(SearchContext);

  return (
    <section className="pt-6">
      <h1 className="text-xl mb-4">Результаты поиска:</h1>

      {searchResults.length === 0 && <div>Ничего не найдено</div>}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {searchResults.map((figure) => (
          <div key={figure.id}>
            <Link to={`/instruction/${figure.alt}`}>
              {figure.alt}
              <img
                src={`/images/all-figures/${figure.filename}`}
                alt={figure.alt}
                className="w-full h-auto"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchResultsPage;
