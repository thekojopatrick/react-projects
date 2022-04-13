import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { pagesVariants } from "../../constants/Animate";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        variants={pagesVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: "easeOut", type: "linear" }}
        className="container mx-auto"
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
