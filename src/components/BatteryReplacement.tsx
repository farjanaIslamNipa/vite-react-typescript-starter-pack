import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";


const BatteryReplacement = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1']
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1])
  return (
    <motion.div
    style={{
      scale: scaleValues,
      opacity: opacityValues
    }}
    ref={ref}
    className="h-40 rounded-2xl bg-red-500 p-5"
    >
      this is battery replacement
    </motion.div>
  );
};

export default BatteryReplacement;