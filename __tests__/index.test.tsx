import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Booking from "@/app/booking/page";

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    // Verify that the main section is rendered
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders the welcome heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /welcome to veyor wellness/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

describe("Booking Page", () => {
  it("renders the session selection", () => {
    render(<Booking />);
    const sessionSelection = screen.getByText("Choose Appointment");
    expect(sessionSelection).toBeInTheDocument();
  });
});
