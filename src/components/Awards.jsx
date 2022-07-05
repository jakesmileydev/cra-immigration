import texas from "../images/award-logos/texas.png";
import spanish from "../images/award-logos/spanish.png";
import aila from "../images/award-logos/aila.jpg";
import topNineteen from "../images/award-logos/top-nineteen.png";
import topTwenty from "../images/award-logos/top-twenty.png";
import expertise from "../images/award-logos/expertise.png";

import { motion } from "framer-motion";
export default function Awards() {
  return (
    <motion.section
      className="awards"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.3 },
      }}
      viewport={{ once: true }}
    >
      <ul>
        <li>
          <img src={texas} alt="texas bar logo"></img>
        </li>
        <li>
          <img
            src={topNineteen}
            alt="Ft Worth magazine top attorneys 2019 logo"
          ></img>
        </li>
        <li>
          <img src={spanish} alt="abogado verificado logo"></img>
        </li>
        <li>
          <img
            height="100px"
            src={aila}
            alt="American Immigration Lawyers Association logo"
          ></img>
        </li>
        <li>
          <img
            src={topTwenty}
            alt="Ft Worth magazine top attorneys 2020 logo"
          ></img>
        </li>
        <li>
          <img
            src={expertise}
            alt="Expertise best immigration lawyers in arlington logo"
          ></img>
        </li>
      </ul>
    </motion.section>
  );
}
