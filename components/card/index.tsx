import Link from "next/link";
import Image from "next/image";
import { Article } from "./styles";
import { HiPlusSm } from "react-icons/hi";
import { CardProps } from "../../types/card";

const Card = ({ path, slug, title, thumb, description, tags }: CardProps) => {
  return (
    <Article className="card-link">
      <Link href="[...slug]" as={path}>
        <a>
          <div>
            <HiPlusSm />
            <ul className="card-link__tags">
              {tags?.map((i: any) => (
                <li key={i.item}>{i.item}</li>
              ))}
            </ul>
            <Image
              src={thumb}
              alt={title}
              width={350}
              height={190}
              placeholder="blur"
              blurDataURL={thumb}
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
