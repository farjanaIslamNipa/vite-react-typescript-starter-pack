import {Button} from "@/components/ui/button";
import heroImg from "@/assets/images/hero.webp"
import {motion} from 'framer-motion';

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    duration: 0.3,
    transition: {
      staggerChildren: 0.5,
      // delayChildren: 1
    }
  }
}

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const HeroSection = () => {
  return (
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

      <div className="flex items-end">
        <img className="-rotate-[30deg] h-[40%] object-cover" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;