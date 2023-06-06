import { bestServices } from "../constants";
import styles from "../style";
import Services from './Services'

const Testimonials = () => (
  <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        the best and awesome <br className="sm:block hidden" /> services we provide
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-full`}>
          Most business related to agricurature can find find themseves
          here. Firstly we help farmers to find the best place to sell the 
          production related to agriculture, and again those who have restaurants
          as well as food merchant can easly find the products to buy on the
          low price here.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {bestServices.map((card) => <Services key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
