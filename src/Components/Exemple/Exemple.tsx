/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Carousel, CarouselItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICarouselImage, IExampleProps } from "../../Interfaces/ICarrusel";
import "bootstrap/dist/css/bootstrap.min.css";

const items: ICarouselImage[] = [
  {
    src: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/haagen-dazs-packaging-2017.png?resize=696%2C339&ssl=1",
    id: 1,
  },
  {
    src: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/haagen-dazs-antes.jpg?resize=696%2C424&ssl=1",
    id: 2,
  },
  {
    src: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/haagen-dazs-antes.jpg?resize=696%2C424&ssl=1",
    id: 3,
  },
  {
    src: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/haagen-dazs-antes.jpg?resize=696%2C424&ssl=1",
    id: 4,
  },
  {
    src: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/haagen-dazs-antes.jpg?resize=696%2C424&ssl=1",
    id: 5,
  },
];

function Example(args: IExampleProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="  "
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        id={item.src}
      >
        <div className="w-full flex justify-center items-center ">
          <img src={item.src} className="h-full" />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="w-full  "
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      {slides}
    </Carousel>
  );
}

export default Example;
