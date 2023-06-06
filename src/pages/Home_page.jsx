/* eslint-disable no-unused-vars */
import styles from "../style";
import { Navbar,Billing,Business,Clients,CTA,Stats,Footer,Testimonials,Hero,ServicesHeaders } from '../components';
import { motion } from "framer-motion";

const Home_page = () => (
    <motion.div 
      className='bg-transparent w-full overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    <div className={`bg-hero-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-[#011a32] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Billing />
        <ServicesHeaders />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </motion.div>
  )

export default Home_page