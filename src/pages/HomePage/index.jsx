import TopicCard from "../../components/TopicCard";
function HomePage() {
  const pictures = [
    {
      src: "/images/bird.png",
      alt: "Птицы",
      width: 125,
      mWidth: 65,
      height: 149,
      mHeight: 76,
    },
    {
      src: "/images/boat.png",
      alt: "Лодки",
      width: 232,
      mWidth: 112,
      height: 95,
      mHeight: 48,
    },
    {
      src: "/images/flower.png",
      alt: "Цветы",
      width: 125,
      mWidth: 82,
      height: 149,
      mHeight: 102,
    },
    {
      src: "/images/box.png",
      alt: "Коробки",
      width: 176,
      mWidth: 99,
      height: 149,
      mHeight: 81,
    },
  ];

  return (
    <>
      <section className="pt-[38px]">
        <h1 className="md:text-4xl text-center md:mb-[53px]">
          Оригами — искусство гармонии и творчества
        </h1>
        <p className="roboto text-right text-xs md:text-xl mb-2.5 md:mb-[89px]">
          Добро пожаловать в наш небольшой раздел о искусстве классического
          оригами. Здесь каждая модель сопровождается простой инструкцией и
          пошаговыми фотографиями.
        </p>
      </section>

      <section className="pb-[38px]">
        <h2 className="text-2xl md:text-4xl text-center mb-[13px] md:mb-[53px]">
          Популярные темы оригами
        </h2>
        {pictures.map((pic, index) => {
          pic.direction = (index + 1) % 2 === 0 ? "r" : "l";
          let clNm = "";
          switch (pic.alt) {
            case "Птицы":
              clNm = "w-[65px] md:w-[125px] h-[76px] md:h-[149px] ml-[17px] md:ml-7";
              break;
            case "Лодки":
              clNm = "w-[112px] md:w-[232px] h-[48px] md:h-[95px] ml-[17px] md:ml-7";
              break;
            case "Цветы":
              clNm = "w-[82px] md:w-[125px] h-[102px] md:h-[149px] ml-[17px] md:ml-7";
              break;
            case "Коробки":
              clNm = "w-[99px] md:w-[176px] h-[81px] md:h-[149px] ml-[17px] md:ml-7";
              break;
            default:
              break;
          }
          return (
            <TopicCard key={index} direction={pic.direction} title={pic.alt}>
              <img src={pic.src} alt={pic.alt} className={`${clNm} max-sm:mt-12`} />
            </TopicCard>
          );
        })}
      </section>
    </>
  );
}

export default HomePage;
