function FiguresPage() {
  const figures = ["Журавль", "Лиса", "Лотос", "Роза", "Рыба", "Свинья"];

  return (
    <>
      <section className="mb-6 space-y-3">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <label className="text-sm font-medium">Фильтр</label>
          <input
            type="text"
            className="w-full md:w-64 rounded-full border border-black/10 px-3 py-1 text-sm bg-white/80"
            placeholder="Поиск фигур..."
          />
        </div>
        <div className="flex flex-wrap gap-2 text-xs md:text-sm">
          <select className="px-3 py-1 rounded-full bg-white/80 border border-black/10">
            <option>Тип фигуры</option>
          </select>
          <select className="px-3 py-1 rounded-full bg-white/80 border border-black/10">
            <option>Сложность</option>
          </select>
          <select className="px-3 py-1 rounded-full bg-white/80 border border-black/10">
            <option>Размер</option>
          </select>
        </div>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {figures.map((name) => (
            <div
              key={name}
              className="bg-white/80 rounded-xl p-3 flex flex-col gap-2 shadow-sm"
            >
              <div className="w-full aspect-video bg-gray-300 rounded" />
              <div className="text-sm font-semibold text-center">{name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FiguresPage;