import {Button} from "@/components/ui/button";
import heroImg from "@/assets/images/hero.webp"
import {motion} from 'framer-motion';

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    duration: 0.4,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
}

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const laptop = {
  initial :{ 
    y: 0,
    rotate: 0,
    scale: 3
   },
  animate: { 
    y: 20,
    rotate: -25,
    scale: 1,
    transition: {
      duration: 1,
      y:{
        repeat: Infinity,
        duration: 4,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    } 
  }
}

const HeroSection = () => {
  return (
    <div className="overflow-hidden pb-10">
      <div className="app-container grid grid-cols-2 h-screen items-center">
        <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        >
          <motion.h1 className="text-7xl font-bold text-nowrap"
          variants={introChildren}
          >
            <span>Don't Worry</span>
            <br />
            <span>We will fix it</span>
          </motion.h1>
          <motion.p className="max-w-[50ch]"
          variants={introChildren}
          >
            Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. Distinctio, unde.
          </motion.p>
          <motion.div
          variants={introChildren}
          >
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div className="flex items-end"
        variants={laptop}
        initial="initial"
        animate="animate"
        >
          <img className="h-[40%] object-cover" src={heroImg} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;