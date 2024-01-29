import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {

  const {ref, style} = useScrollGrow()

  return (
    <motion.div
    style={style}
    ref={ref}
    className="h-40 rounded-2xl bg-red-500 p-5"
    >
      this is battery replacement
    </motion.div>
  );
};

export default BatteryReplacement;