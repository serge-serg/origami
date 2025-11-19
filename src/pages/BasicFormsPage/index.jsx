function BasicFormsPage() {
  const forms = ["Треугольник", "Книга", "Дверь", "Воздушный змей"];

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Базовые формы</h1>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          {forms.map((name) => (
            <div
              key={name}
              className="w-full aspect-video bg-gray-300 rounded"
            />
          ))}
        </div>
        <div className="space-y-6 flex md:flex-col justify-between">
          {forms.map((name) => (
            <div key={name} className="text-sm md:text-base">
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasicFormsPage;
