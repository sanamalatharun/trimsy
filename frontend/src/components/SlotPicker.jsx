const SlotPicker = ({ slots, selected, onSelect }) => {
  return (
    <div className="slots">
      {slots.map((slot) => (
        <button
          key={slot}
          className={selected === slot ? "slot selected" : "slot"}
          onClick={() => onSelect(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  );
};

export default SlotPicker;
