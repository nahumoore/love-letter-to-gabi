import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function LoveLetterContent() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <Card className="p-4 z-50 flex flex-col justify-center items-center md:max-w-3xl sm:max-w-full">
        <motion.div
          className="[&>p]:text-2xl [&>p]:font-cormorantGaramond [&>p]:text-gray-700 [&>p]:mb-4"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-bold text-purple-600 mb-2"
            variants={childVariants}
          >
            Gabriela,
          </motion.h1>
          {[
            "No me acuerdo cuándo fue la última vez que escribí una carta, y menos cuándo fue la última vez que escribí algo tan en serio; no soy de compartir mis sentimientos, pero por vos lo vale, todo lo vale.",
            'Muchas veces cuando estoy solo, me gusta ponerme a pensar en ese domingo de tarde hablando con Gonza, pidiéndole consejos para que todo saliera bien. Me acuerdo cuando estaba saliendo de casa, mirar mi reflejo en el espejo del ascensor pensando: "¿De qué temas podríamos hablar?", "¿De qué le puedo sacar charla?", "¿Y si hay silencios incómodos? ¿Cómo la remo?".',
            "Y así llegó el momento en que nos conocimos por primera vez en la parada (lo hermosa que estabas con ese outfit negro), y cuando llegamos al mercado todo fluyó perfecto. Me acuerdo pensar, ¡es la primera mujer que tiene los mismos gustos que yo, le gusta Lil Peep!! Suena idiota, pero hasta ese momento pensaba que era algo imposible; imposible hasta que apareciste vos, que todo lo imposible lo hacés posible con esa sonrisa hermosa y esa energía positiva que tanto me encantó desde esa primera vez.",
            "Ya pasó más de un año y nunca me voy a olvidar ni arrepentir de nada de lo que pasó aquel 8 de octubre del 2023.",
            "Me gusta serte honesto, y contarte que cuando era más chico, desde la escuela hasta el liceo me gustaron algunas mujeres, ese sentimiento de querer hablar y pasar tiempo con esa persona. Pero con vos es diferente: ese sentimiento se multiplicó, y no es solo pasar tiempo contigo, sino también querer cuidarte, protegerte, ser tu apoyo cuando tenés un mal día y tu compañero de festejo en los buenos. Es preocuparme por tu bienestar, por tus sueños, por tus metas. Es sentirme seguro cuando estoy con vos, poder ser yo mismo sin miedo a ser juzgado. Es querer compartir cada momento, cada logro, cada tristeza, cada alegría. Esa paz que siento cuando dormimos juntos, esa motivación que me das para mejorar día a día.",
            "Y es mucho más que eso, porque vos fuiste y siempre serás la primera que me enseñó a amar y a ser amado, la primera que me enseñó que la vida no es detrás de una pantalla cada fin de semana, sino de compartir los pequeños y simples momentos de la vida como tomar un café un domingo de mañana mirando una serie. No podría haber elegido una mejor mujer para experimentar este nuevo sentimiento para mi.",
            "Todo esto me lleva a pensar en cómo, desde que nos conocimos, muchas cosas en mi vida cambiaron; no solo la motivación que tengo día a día, sino también cosas que van más allá de nosotros. Nunca te comenté esto antes, pero me encantaría agradecerte por haber mejorado la comunicación que tengo con mis padres. Antes, en una semana como mucho hablábamos 3 o 4 veces, y era solo para saludarnos. Ahora, gracias a vos, puedo sentarme a hablar con ellos, ya sea yo solo o contigo presente (Me gusta mas esta opcion).",
            "Todavía no había escrito 'te amo', porque quería que primero sintieras todo lo que hay detrás de estas palabras, todo lo que significás para mí. Pero estoy acá, con algunas lágrimas en los ojos, diciéndotelo de la forma más simple y sincera: Te amo! Y no hay nada que desee más que pasar mi vida contigo.",
            "Nahuel",
          ].map((text, index) => (
            <motion.p key={index} variants={childVariants}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </Card>

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="relative w-fit">
          <Image
            src="/us.jpg"
            alt="Gabi"
            width={300}
            height={300}
            className="rounded-md shadow-lg"
          />
          <Heart className="absolute -top-4 -right-3 rotate-12 w-10 h-10 text-purple-500 fill-purple-500" />
        </div>
        <span className="text-md text-center text-gray-500 block font-cormorantGaramond mt-2">
          16 de octubre 2023
        </span>
      </div>
    </motion.div>
  );
}
