import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchFiguresFiltered } from "../../api";

const initialState = {
  filterIsVisible: false,
  filter: {},
  figures: [],
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FILTER":
      return { ...state, filterIsVisible: !state.filterIsVisible };

    case "UPDATE_FILTER": {
      const { criteria, value } = action.payload;
      const optionsDefault = ["Tип фигуры", "Сложность", "Размер"];
      
      if (optionsDefault.includes(value)) {
        const newFilter = { ...state.filter };
        delete newFilter[criteria];
        return { ...state, filter: newFilter };
      }
      
      return {
        ...state,
        filter: { ...state.filter, [criteria]: value },
      };
    }

    case "SET_FIGURES":
      return { ...state, figures: action.payload };

    default:
      return state;
  }
};

function FiguresPage() {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { filterIsVisible, filter, figures } = state;

  useEffect(() => {
    async function fetchPictures() {
      try {
        const data = await fetchFiguresFiltered(filter);
        dispatch({ type: "SET_FIGURES", payload: data });
      } catch (error) {
        console.error("Error fetching pictures:", error);
      }
    }
    fetchPictures();
  }, [filter]);

  const handleFilterChange = (criteria, e) => {
    dispatch({
      type: "UPDATE_FILTER",
      payload: { criteria, value: e.target.value },
    });
  };
  const optionsDefault = ["Tип фигуры", "Сложность", "Размер"];
  const FilterItem = ({ options, criteria }) => {
    return (
      <select
        value={filter[criteria] || options[0].value}
        onChange={(e) => handleFilterChange(criteria, e)}
        className="px-3 py-1 bg-transparent"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {" "}
            {item.value}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <section className="pt-[27px] md:flex-row flex gap-4">
        <div className="flex gap-3">
          Фильтр{" "}
          <img
            src="/images/icons/filter.png"
            alt="filter icon"
            onClick={() => dispatch({ type: "TOGGLE_FILTER" })}
          />
        </div>
        {/* Фильтры: */}
        {filterIsVisible && (
          <div className="flex flex-wrap bg-[#E4D2D8] gap-2 text-xs md:text-sm">
            <FilterItem
              criteria="type"
              options={[
                { value: optionsDefault[0] },
                { value: "Животные" },
                { value: "Растения" },
                { value: "Предметы" },
              ]}
            />
            <FilterItem
              criteria="complexity"
              options={[
                { value: optionsDefault[1] },
                { value: "Несложный" },
                { value: "Сложный" },
              ]}
            />
            <FilterItem
              criteria="size"
              options={[
                { value: optionsDefault[2] },
                { value: "Маленький" },
                { value: "Средний" },
                { value: "Большой" },
              ]}
            />
          </div>
        )}
      </section>

      <section className="px-12 py-5">
        <div className="grid gap-y-14 gap-x-[18vh] sm:grid-cols-2">
          {figures.map((figure) => (
            <div key={figure.alt} className="flex justify-between">
              <Link to={`/instruction/${figure.alt}`} className="text-[32px] font-small-caps">{figure.alt}</Link>
              <img
                src={`/images/all-figures/${figure.filename}`}
                style={{ width: "136px", height: "auto" }}
                alt={figure.alt}
                className="w-full h-auto"
              />
            </div>
          ))
        }
        </div>
        {figures.length === 0 && <h3 className="text-center py-12">Фигур нет</h3>}
      </section>
    </>
  );
}

export default FiguresPage;
