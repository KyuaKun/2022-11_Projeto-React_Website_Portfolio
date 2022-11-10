import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonialsStyles = `mx-auto relative max-w-[400px] flex flex-col justify-end
     pt-16 mt-48 before:absolute before:top-[120px] before:-ml-[110px] before:left-1/2 `;

  return (
    <section id="depoimentos" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          DEPOIMENTOS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
          Aqui estão alguns depoimentos sobre o meu trabalho: Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/* DEPOIMENTOS */}
      <div className="md:flex md:justify-between gap-8 ">
        <motion.div
          className={`bg-blue ${testimonialsStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            Sodales ut eu sem integer vitae justo eget.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialsStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialsStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
