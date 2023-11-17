import { motion } from "framer-motion";

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <motion.div
      className="w-full bg-main py-24 py-6 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-between md:w-full">
          <div className="md:w-1/2 md:mr-6">
            <motion.div
              variants={textVariants}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Mission</h3>
              <p className="text-lg text-center md:text-left">
                Our mission is to provide schools with high-quality websites that facilitate seamless communication between learners, parents, and educational institutions. We aim to simplify and enhance the educational journey for students, making it more accessible and engaging.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2 md:ml-6">
            <motion.div
              variants={textVariants}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Vision</h3>
              <p className="text-lg text-center md:text-left">
                Our vision is to grow communities by creating user-friendly platforms that empower schools to efficiently manage their online presence and connect with their communities. We strive to foster collaboration and bridge the gap between learners, parents, and educational institutions, ultimately creating a supportive and inclusive learning environment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Mission;
