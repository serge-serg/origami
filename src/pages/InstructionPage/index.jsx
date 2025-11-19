function InstructionPage() {
  const steps = [1, 2, 3, 4];

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Название фигуры</h1>
      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="space-y-6">
          {steps.map((n) => (
            <div key={n} className="flex gap-4 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded" />
              <div>
                <div className="font-semibold text-sm md:text-base">
                  Шаг {n}
                </div>
                <p className="text-xs md:text-sm">
                  Описание шага. Краткое объяснение того, что нужно сделать с
                  листом бумаги.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-semibold">Результат</div>
          <div className="w-full aspect-square bg-gray-300 rounded" />
        </div>
      </div>
    </>
  );
}

export default InstructionPage;