import { Search } from "..";
import { render, screen, fireEvent } from "../../../../test-utils";

const mockHandleSearchChange = jest.fn();

describe("Search", () => {
  it("should pass the placeholder prop to the input element", () => {
    const placeholderText = "Test placeholder";

    render(
      <Search
        placeholder={placeholderText}
        onInputChange={mockHandleSearchChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);

    expect(inputElement).toBeTruthy();
  });

  it("should be able to type in input", () => {
    const placeholderText = "Search a character...";

    render(
      <Search
        placeholder={placeholderText}
        onInputChange={mockHandleSearchChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputElement, { target: { value: "abomination" } });

    expect((inputElement as HTMLInputElement).value).toBe("abomination");
  });

  it("should be able to type in input", () => {
    const placeholderText = "Search a character...";

    render(
      <Search
        placeholder={placeholderText}
        onInputChange={mockHandleSearchChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputElement, { target: { value: "abomination" } });

    expect((inputElement as HTMLInputElement).value).toBe("abomination");
  });
});
