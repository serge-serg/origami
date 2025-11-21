import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api";

function InstructionPage() {
  const { id } = useParams();

  console.log("id =", id);

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    if (!id) { 
      console.log("No id provided in URL parameters");
      return; 
    };
    async function fetchItem() {
      try {
        const data = await getItem(id);
        console.log("Fetched item data:", data);
        setItemData(data[0]);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    }
    fetchItem();
  }, []);

  const TextBlock = ({ n, text, order = false }) => (
    <div className={`flex flex-col flex-grow text-right${order ? ` ${order}` : ""} max-w-[300px] max-md:mx-auto max-md:pr-[26px]`}>
      <h2 className="text-5xl h-16 pt-2.5">Шаг {n}</h2>
      <p className="text-2xl">{text}</p>
    </div>
  );

  return (
    <div className="pt-8 pb-[63px] px-12">
      <h1 className="text-5xl text-center h-16 mb-4">{id}</h1>
      <div>
        {(itemData?.steps && (
          <>
            <div className="space-y-6">
              {itemData?.steps?.map((step, index) => {
                const even = (index + 1) % 2;
                return (
                  <div key={index} className="flex max-md:flex-wrap mb-10" style={{ columnGap: "33%"}}>
                    {(!even && <TextBlock order="max-md:order-1" n={step.stepNumber} text={step.description} />) || null}
                    <div className="flex-none max-md:mx-auto">
                      <img src={`/images/all-figures/instruction/${itemData.alt.toLowerCase()}/${step.image}`} width={300} height={300} />
                    </div>
                    {(even && <TextBlock n={step.stepNumber} text={step.description} />) || null}
                  </div>
                );
              })}
            </div>
            <div className="mt-32">
              <img className="mx-auto" src={`/images/all-figures/${itemData?.filename}`} width={650} height={650} />
              <h1 className="text-5xl h-[63px] text-center mt-5">Результат</h1>
            </div>
          </>
        )) || <h3 className="text-center text-3xl">Нет такой фигуры</h3>}
      </div>
    </div>
  );
}

export default InstructionPage;
