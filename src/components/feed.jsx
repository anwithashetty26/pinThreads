import Card from "./Card";

export default function Feed({ cards, onSelect }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          onClick={() => onSelect(card)}
        />
      ))}
    </div>
  );
}