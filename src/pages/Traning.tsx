import React from "react";
import { Card, Flex } from "antd";

const traning = [
  {
    id: 1,
    header: "Что лучше: мало повторений с тяжёлым весом или много с лёгким",
    img: "https://cdn.lifehacker.ru/wp-content/uploads/2021/01/DSC_2512_1602139763_1648699842.jpg",
    description:
      "Чтобы стать сильнее, то есть поднимать тяжёлые веса на пределе своих возможностей, недостаточно просто нарастить гору мышц.\n" +
      "\n" +
      "Дело в том, что наши мышцы состоят из волокон, и не все они одновременно напрягаются, чтобы произвести силу. Чтобы вы могли поднять действительно тяжёлый вес, надо научить нервную систему вовлекать максимальное количество мышечных волокон.\n" +
      "\n" +
      "Для этой цели подойдут тяжёлые подходы на 2–5 повторений. При этом вес должен составлять 85–95% от одноповторного максимума (1ПМ) — того веса, который вы сможете поднять только один раз.\n" +
      "\n" +
      "Несмотря на то, что такие тренировки — лучшее, что вы можете сделать для роста силы, всё же не стоит практиковать их постоянно. Особенно если речь идёт о сложных движениях, в которых участвует много суставов и мышечных групп: приседаниях, становой тяге, жиме лёжа, рывке и толчке.",
  },
  {
    id: 2,
    header: "6 упражнений для профилактики боли и травм в тренажёрном зале",
    img: "https://cdn.lifehacker.ru/wp-content/uploads/2020/01/DSC_2213_1650528365-1280x640.jpg",
    description:
      "1. Ягодичный L‑мостик\n" +
      "Чаще всего в тренажёрном зале и в обычной жизни бёдра двигаются вперёд и назад. Например, во время ходьбы, бега, приседаний, выпадов. Движения во фронтальной же плоскости — из стороны в сторону — встречаются гораздо реже. В результате мышцы, ответственные за отведение и приведение ног, развиты хуже, чем те, что сгибают и разгибают их.\n" +
      "\n" +
      "Ягодичный L‑мостик направлен на проработку средних ягодичных мышц, ответственных за отведение ноги в сторону. Укрепление этих мышц поможет вам увеличить показатели в приседаниях, становой тяге и выпадах, а также снимет часть нагрузки с нижней части спины.\n" +
      "\n" +
      "Кроме того, упражнение покажет, есть ли у вас проблемы с мобильностью бёдер, и поможет увеличить диапазон движений.\n" +
      "\n" +
      "Лягте на пол на спину, согните ноги и поставьте стопы, руки положите ладонями вниз.\n" +
      "Оторвите таз от пола и поднимите его максимально высоко, напрягите ягодицы в верхней точке.\n" +
      "Оторвите одну ногу от пола, согните её в колене под прямым углом и подтяните колено ближе к телу.\n" +
      "Сохраняя напряжение ягодичных мышц, отведите поднятое бедро в сторону, как будто собираетесь положить его на пол. Задержите на секунду, вернитесь в исходное положение и повторите.\n" +
      "Старайтесь удерживать таз на месте, не давайте ему скручиваться и наклоняться.\n" +
      "Делайте движение медленно и под контролем, удерживайте напряжение ягодичных мышц.\n" +
      "Выполните три подхода по шесть повторений для каждой ноги.",
  },
  {
    id: 3,
    header:
      "Как научиться подтягиваться 5, 15 или 25 раз: три программы для разного уровня подготовки",
    img: "https://cdn.lifehacker.ru/wp-content/uploads/2020/08/DSC_2199_1650527868-1280x640.jpg",
    description:
      "Как выбрать программу подтягиваний\n" +
      "Для начала оцените свой уровень подготовки. Для этого запрыгните на турник и подтянитесь максимальное количество раз — столько, сколько сможете без раскачки и рывков. В зависимости от результатов выберите подходящую программу тренировок.\n" +
      "\n" +
      "Если подтянулись 0–4 раза\n" +
      "Вам подойдёт программа для новичков, составленная из подводящих упражнений. Простые движения укрепят мышцы, которые работают во время классических подтягиваний и помогут освоить правильную технику.\n" +
      "\n" +
      "Если подтянулись 5–11 раз\n" +
      "Попробуйте программу подтягиваний Павла Цацулина — основателя школы физической подготовки StrongFirst и бывшего тренера спецназа США. Её особенность в том, чтобы выполнять один вид подтягиваний, постепенно увеличивая количество повторений в подходе.\n" +
      "\n" +
      "Если подтянулись 12–15 раз\n" +
      "Обратите внимание на программу подтягиваний Чарльза Льюиса Армстронга — американского военного, который установил рекорд в 1 435 подтягиваний за пять часов. У неё нет ограничений по начальному уровню подготовки, но лучше приступать к ней, когда вы можете выполнить 12 повторений в подход.\n" +
      "\n" +
      "Это связано с тем, что некоторые тренировочные дни включают девять рабочих подходов, которые выполняются через небольшие промежутки времени. Чтобы сделать в каждом подходе хотя бы 1–3 раза, нужно быть достаточно подготовленным, иначе вы просто не сможете закончить тренировку.",
  },
  {
    id: 4,
    header:
      "Упражнения, которые прокачивают ягодицы лучше, чем приседания и становая тяга",
    img: "https://cdn.lifehacker.ru/wp-content/uploads/2021/03/DSC_2208_1650533003-1280x640.jpg",
    description:
      "Становая тяга и приседания не помогут накачать ягодицы\n" +
      "Есть более эффективные для прокачки ягодиц упражнения, чем становая тяга, приседания и выпады.\n" +
      "\n" +
      "Все эти упражнения выполняются в вертикальном положении и включают сгибание и разгибание бедра. Однако наибольшая активация ягодичных мышц происходит во время другого двигательного паттерна — отведения бедра назад.\n" +
      "\n" +
      "\n" +
      "Отведение бедра назад\n" +
      "Это движение естественно для человека. Оно присутствует при ходьбе, беге, спринте, метании снарядов, выпадах, а упражнения на тренировку этого паттерна обычно выполняются в горизонтальном положении.\n" +
      "\n" +
      "Упражнения на разгибание бедра тоже задействуют ягодичные мышцы, но не полностью. Так, например, во время становой тяги ягодичные мышцы активируются только на 52%, а в приседаниях Зерхера — на 45%.\n" +
      "\n" +
      "В то же время самые эффективные упражнения, основанные на отведении бедра назад, обеспечивают более 100% активации ягодичных мышц. Например, подъём бёдер обеспечивает 119% активации, отведение бедра назад на коленях — 112%, а подъём согнутых ног назад — 111%.\n" +
      "\n" +
      "Это подтверждается научными данными. Исследование показало, что подъём бёдер лучше активирует большие ягодичные мышцы и бицепсы бедра, чем приседания со штангой на спине. Подъём бёдер активирует верхнюю часть ягодичных мышц на 69,5%, а нижнюю — на 86,8%, тогда как присед только на 29,4 и 45,4%.\n" +
      "\n" +
      "Основываясь на этих открытиях, Контрерас предложил эффективный план прокачки ягодичных мышц, состоящий из четырёх фаз.",
  },
];

const Traning = () => {
  return (
    <Flex
      vertical
      align={"center"}
      gap={30}
      style={{
        paddingTop: 20,
        width: "clamp(100px,100%,600px)",
        margin: "auto",
      }}
    >
      {traning.map((train) => (
        <Card key={train.id}>
          <Flex vertical gap={25}>
            <h2>{train.header}</h2>
            <img
              style={{
                width: "clamp(100px,100%,600px)",
              }}
              src={train.img}
            />
            <p>{train.description}</p>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default Traning;