function TopicCard({ title, direction, children }) {
  return (
    <div className={`flex mb-2.5 max-w-[550px] ${direction === "l" ? "md:ml-auto" : "md:mr-auto"}`}>
      <div>
        <h3 className="text-lg h-[43px] md:text-[32px] text-right pr-14 md:pr-4">{title}</h3>
        <p className="text-right">
          Краткое описание темы. Здесь можно рассказать, какие модели входят в
          раздел и чем они интересны.
        </p>
      </div>
      {children}
    </div>
  );
}
export default TopicCard;
