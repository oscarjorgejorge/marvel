import { CharacterCard } from "..";
import { render, screen } from "../../../../test-utils";
import { favouriteContextInit } from "../../../../core/providers/favourites/favouritesProvider";
const mockCharacter = {
  id: 1009146,
  name: "Abomination (Emil Blonsky)",
  description:
    "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian ...",
  resourceURI: "http://gateway.marvel.com/v1/public/characters/1009146",
  thumbnail: {
    extension: "jpg",
    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
  },
  comics: {
    items: [
      {
        name: "Uncanny X-Men (1963) #402",
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13943",
      },
    ],
  },
};

describe("CharacterCard component", () => {
  it("should have the character id as herf", () => {
    render(<CharacterCard character={mockCharacter} />);

    const liElement = screen.getByRole("link");
    expect(liElement).toHaveAttribute("href", `/${mockCharacter.id}`);
  });

  it("heart icon should not be checked if the character is not on my favourites", () => {
    render(<CharacterCard character={mockCharacter} />);

    const heartIconElement = screen.getByTestId("heart-icon");

    expect(heartIconElement).toHaveClass("fill-none");
  });

  it("heart icon should not be checked if the character is not on my favourites", () => {
    render(<CharacterCard character={mockCharacter} />, {
      favouritesProviderProps: {
        ...favouriteContextInit,
        favourites: [1009146],
      },
    });

    const heartIconElement = screen.getByTestId("heart-icon");

    expect(heartIconElement).not.toHaveClass("fill-none");
  });
});
