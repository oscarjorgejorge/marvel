import { FC } from "react";
import { IComic } from "../../../core/interfaces/comic.model";
import { Image } from "../Image";
import { Alert } from "../Alert";

interface ComicListProps {
  comics: IComic[];
}

export const ComicList: FC<ComicListProps> = (props: ComicListProps) => {
  const { comics } = props;

  return (
    <div className="horizontal-custom-scroll">
      <p className="mb-[12px] text-3xl font-bold uppercase">Comics</p>
      {comics.length > 0 && (
        <ul className="flex gap-4 overflow-auto">
          {comics.map((comic) => (
            <li
              key={comic.title}
              className={`min-w-[50%] ${comics.length > 4 ? "sm:min-w-[19%]" : ""}`}
            >
              <Image
                image={comic.thumbnail}
                alt={comic.title}
                className="h-[260px] sm:h-[320px]"
              />
              <p className="font-bold">{comic.title}</p>
              {!isNaN(comic.year) && <p>{comic.year}</p>}
            </li>
          ))}
        </ul>
      )}
      {comics.length === 0 && <Alert text="No comics found" />}
    </div>
  );
};
