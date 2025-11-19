import TopicCard from "../../components/TopicCard";
function HomePage() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Оригами — искусство гармонии и творчества
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          Добро пожаловать в наш небольшой раздел о искусстве классического
          оригами. Здесь каждая модель сопровождается простой инструкцией и
          пошаговыми фотографиями.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Популярные темы оригами</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <TopicCard title="Птицы" />
          <TopicCard title="Цветы" />
          <TopicCard title="Коробки" />
        </div>
      </section>
    </>
  );
}

export default HomePage;
