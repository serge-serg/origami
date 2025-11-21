import { useEffect, useState } from "react";
import { getItems } from "../../api";
function BasicFormsPage() {
  const [figures, setPictures] = useState([]);

  useEffect(() => {
    async function getBasicItems() {
      try {
        const items = await getItems("basic");
        setPictures(items);
      } catch (error) {
        console.error("Error fetching pictures:", error);
      }
    }
    getBasicItems();
  }, []);

  return (
    <>
      <div className="pt-[58px] pb-[28px]">
        {figures.length === 0 && (
          <h3 className="text-center py-12">Пока ничего нет</h3>
        )}
        {figures.map((fig) => (
          <div key={fig.alt} className="flex justify-between mb-6">
            <div className="flex-none">
              <img src={`/images/basic/${fig.filename}`} width="320" style={{ height: "auto" }} />
            </div>
            <h2 className="text-[40px] flex-grow text-center">{fig.alt}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default BasicFormsPage;
