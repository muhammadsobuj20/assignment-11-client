import { motion } from "framer-motion";

const StatCard = ({ label, value, Icon, animation }) => {
  return (
    <motion.div
      variants={animation}
      className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <div className="text-3xl font-bold text-primary">{value}</div>
      <p className="text-gray-500">{label}</p>
    </motion.div>
  );
};

export default StatCard;
