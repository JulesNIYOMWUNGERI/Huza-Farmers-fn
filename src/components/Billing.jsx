import { apple, Group, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="payment" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Group} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Best and secure <br className="sm:block hidden" /> payment
        method
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You may be a restaurant owner, or you may be a food merchant and want
        the best horticulture yield!, we can help you to find the best products 
        here, and you can easily & securely make your payment on this platform. 
        we also provide a free delivery services anywhere in Rwanda after 
        successfully making your payment.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
