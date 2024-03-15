import { favouriteContextInit } from "../../../../core/providers/favourites/favouritesProvider";
import { render, screen } from "../../../../test-utils";
import { Header } from "../Header";

describe("Header", () => {
  it("renders header", () => {
    render(<Header />);

    const headerElement = screen.getByTestId("header");

    expect(headerElement).toBeInTheDocument();
  });

  it("header contains 2 links", () => {
    render(<Header />);

    const headerElements = screen.getAllByRole("link");

    expect(headerElements).toHaveLength(2);
  });

  it("renders heart icon and it is visible", () => {
    render(<Header />);

    const headerElement = screen.getByTestId("heart-icon");

    expect(headerElement).toBeVisible();
  });

  it("header no contains paragraph if favourites length is not greater than 0 or not exists", () => {
    render(<Header />);

    const paragraphElement = screen.queryByTestId("favourites-length");

    expect(paragraphElement).not.toBeTruthy();
  });

  it("header contains paragraph if favourites length is  greater than 0", () => {
    render(<Header />, {
      favouritesProviderProps: {
        ...favouriteContextInit,
        favourites: [1, 2, 3, 4],
      },
    });

    const paragraphElement = screen.getByTestId("favourites-length");

    expect(paragraphElement).toHaveTextContent("4");
  });
});
