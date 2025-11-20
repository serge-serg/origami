import TopicCard from "../../components/TopicCard";
import { useState, useEffect } from "react";
import { getItems } from "../../api";
import "./topic-img.css";

function HomePage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const data = await getItems();
        console.log("Fetched pictures:", data);
        setPictures(data);
      } catch (error) {
        console.error("Error fetching pictures:", error);
      }
    }
    fetchPictures();
  }, []);
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
          return (
            <TopicCard key={index} direction={pic.direction} title={pic.alt}>
              <img
                src={`/images/${pic.filename}`}
                alt={pic.alt}
                className="topic-img max-sm:mt-12"
                style={{ // динамически устанавливаем CSS-переменные для класса topic-img; вынужденная мера, т.к. tailwind не поддерживает динамические генерируемые параметры классов -[value]
                  "--w-mobile": `${pic.mWidth}px`,
                  "--h-mobile": `${pic.mHeight}px`,
                  "--ml-mobile": "17px",
                  "--w-desktop": `${pic.width}px`,
                  "--h-desktop": `${pic.height}px`,
                  "--ml-desktop": "28px",
                }}
              />
            </TopicCard>
          );
        })}
      </section>
    </>
  );
}

export default HomePage;
