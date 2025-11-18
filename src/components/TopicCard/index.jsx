function TopicCard({ title }) {
  return (
    <div className="bg-white/70 rounded-xl p-4 flex flex-col gap-3 shadow-sm">
      <div className="w-16 h-16 bg-gray-300 rounded self-center" />
      <h3 className="font-semibold text-lg text-center">{title}</h3>
      <p className="text-xs leading-snug text-center">
        Краткое описание темы. Здесь можно рассказать, какие модели входят в
        раздел и чем они интересны.
      </p>
    </div>
  );
}
export default TopicCard;