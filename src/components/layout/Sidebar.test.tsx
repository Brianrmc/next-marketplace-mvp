import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("shows admin menu items", () => {
    render(<Sidebar role="ADMIN" />);
    expect(screen.getByText("Usuarios")).toBeInTheDocument();
  });

  it("does not show admin items for client", () => {
    render(<Sidebar role="CLIENT" />);
    expect(screen.queryByText("Usuarios")).not.toBeInTheDocument();
  });
});
