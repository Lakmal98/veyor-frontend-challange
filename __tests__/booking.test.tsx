import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "@/app/booking/page";

describe("Booking Component", () => {
  it("should start with the ChooseAppointment tab", () => {
    render(<Booking />);
    expect(screen.getByText("Book a wellness session.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Visit one of our expert consultants to get yourself feeling 100% again."
      )
    ).toBeInTheDocument();
  });

  it("should calender appear when session is selected", () => {
    render(<Booking />);

    // Simulate selecting a session
    fireEvent.click(screen.getByText("Chiro"));

    expect(screen.getByText("Please select a time")).toBeInTheDocument();
  });
});
