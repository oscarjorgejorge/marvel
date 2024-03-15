import { HeartButton } from "..";
import { render, screen } from "../../../../test-utils";

describe("HeartButton", () => {
  it("renders HeartButton", () => {
    render(<HeartButton />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });
});
