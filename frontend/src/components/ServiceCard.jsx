import { motion } from "framer-motion";

const ServiceCard = ({ service, onBook }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2>{service.name}</h2>
      <p>₹{service.price}</p>
      {/* <p>{service.duration} mins</p> */}

      <button onClick={() => onBook(service)}>Book Now</button>
    </motion.div>
  );
};

export default ServiceCard;
