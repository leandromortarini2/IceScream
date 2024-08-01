export interface ICarouselImage {
  src: string;
  id: number;
}

export interface IExampleProps {
  className?: string;
  activeIndex?: number;
  next?: () => void;
  previous?: () => void;
}
