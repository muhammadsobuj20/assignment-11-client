import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, Star } from "lucide-react";
import StatCard from "../ui/StatCard";
// import StatCard from "../../components/ui/StatCard";

const PlatformStats = ({ stats, containerAnimation, itemAnimation }) => {
  return (
    <motion.section
      className="py-16 bg-base-100"
      variants={containerAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          label="Active Tutors"
          value={stats?.tutors || "500+"}
          Icon={Users}
          animation={itemAnimation}
        />
        <StatCard
          label="Students Helped"
          value={stats?.students || "2000+"}
          Icon={BookOpen}
          animation={itemAnimation}
        />
        <StatCard
          label="Success Rate"
          value="98%"
          Icon={TrendingUp}
          animation={itemAnimation}
        />
        <StatCard
          label="Avg. Rating"
          value="4.9/5"
          Icon={Star}
          animation={itemAnimation}
        />
      </div>
    </motion.section>
  );
};

export default PlatformStats;
