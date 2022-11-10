import { LineGradient } from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export const Contacts = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contatos" className="py-48">
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">ME ENVIE</span> UMA MENSAGEM
          </p>
          <div className="flex md:justify-end my-5 ">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORMULARIO */}

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contato" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/vinicius2304@gmail.com"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NOME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="text-red mt-1 ">
                {errors.name.type === "required" && "Este campo é obrigatório"}
                {errors.name.type === "maxLength" &&
                  "Atingiu o limite de 100 caracteres"}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p classemail="text-red mt-1 ">
                {errors.email.type === "required" && "Este campo é obrigatório"}
                {errors.email.type === "pattern" &&
                  "Endereço de email inválido"}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="MENSAGEM"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p classmessage="text-red mt-1 ">
                {errors.message.type === "required" &&
                  "Este campo é obrigatório"}
                {errors.message.type === "maxLength" &&
                  "Limite de 2000 caracteres atingido."}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 
              hover:bg-red hover:text-white transition duration-500"
            >
              FALA COMIGO
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
