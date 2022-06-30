import { render, screen } from "@testing-library/react";
import EventForm from ".";

describe ("testing the EventForm input fields", () => {

    test ("Checks EventForm contains event description input", function () {

        render (<EventForm  />);
    
        const domItemEventDescription = screen.getByPlaceholderText("Add event description here");

        expect(domItemEventDescription).toBeInTheDocument();
        expect(domItemEventDescription).toHaveAttribute("type", "text");
    });
});