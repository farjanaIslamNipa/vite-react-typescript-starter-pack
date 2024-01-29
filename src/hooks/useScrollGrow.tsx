import {useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const useScrollGrow = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1']
  });



  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1])

  const style = {
    scale: scaleValues,
    opacity: opacityValues
  }

  return {
    ref,
    style
  }
};

export default useScrollGrow;