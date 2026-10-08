import { Paths } from "@/routes/paths";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// for development only
const imagesData: ImageData[] = [
  { id: 1, src: "src/assets/img/people1.jpg", alt: "People 1" },
  { id: 2, src: "src/assets/img/people2.jpg", alt: "People 2" },
  { id: 3, src: "src/assets/img/people3.jpg", alt: "People 3" },
  { id: 4, src: "src/assets/img/people4.jpg", alt: "People 4" },
  { id: 5, src: "src/assets/img/people5.jpg", alt: "People 5" },
  { id: 6, src: "src/assets/img/people6.jpg", alt: "People 6" },
  { id: 7, src: "src/assets/img/people7.jpg", alt: "People 7" },
  { id: 8, src: "src/assets/img/people8.jpg", alt: "People 8" },
];

const HOME_CONTENT = {
  title: "Join Our Team of Creators, Builders, and Thinkers",
  description:
    "We're always looking for curious minds and passionate hearts to grow with us. If you're ready to make an impact and be part of something meaningful, we'd love to hear from you.",
} as const;

export const Home = () => {
  const shuffledImages = useMemo(() => {
    const array = [...imagesData];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  const rowPattern = [3, 2, 3];

  let currentIndex = 0;
  const rows = rowPattern.map((count) => {
    const rowItems = shuffledImages.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return rowItems;
  });

  return (
    <section className="pb-10">
      <div className="flex flex-col items-center gap-6 py-10">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6">
            {rowItems.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="h-25 w-25 md:h-40 md:w-40 rounded-full object-cover object-top border border-white shadow-md hover:scale-110 transition duration-300 ease-in-out"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="grid place-items-center text-center px-5">
        <div className="max-w-2xl">
          <p className="font-bold text-4xl py-3 lg:text-5xl">
            {HOME_CONTENT.title}
          </p>
          <p className="text-gray-400 py-3 lg:text-lg">
            {HOME_CONTENT.description}
          </p>
        </div>
        <Link
          to={Paths.TEAMS}
          className="button-link bg-secondary-button text-xs my-6 py-3 px-5 rounded-md hover:scale-110 transition duration-200 ease-in-out">
          see more
        </Link>
      </div>
    </section>
  );
};
