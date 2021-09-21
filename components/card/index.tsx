import Link from "next/link";
import Image from "next/image";
import { Article } from "./styles";
import { HiPlusSm } from "react-icons/hi";

type CardProps = {
  url: string;
  title: string;
  image: string;
  description: string;
  tag: string;
};

const Card = ({ url, title, image, description, tag }: CardProps) => {
  return (
    <Article className="card-link">
      <Link href={url} passHref>
        <a>
          <div>
            <HiPlusSm />
            <span>{tag}</span>
            <Image
              src={image}
              alt={title}
              width={350}
              height={190}
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </Article>
  );
};

export default Card;
