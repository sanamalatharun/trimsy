const generateSlots = () => {
  const slots = [];
  const start = 10;
  const end = 20;

  for (let hour = start; hour < end; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }

  return slots;
};

module.exports = generateSlots;
