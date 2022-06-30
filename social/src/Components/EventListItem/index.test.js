import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import EventListItem from ".";

let testData = {
    events_id: 1,
    type: "Social",
    description: "Test Social",
    author: "Test Author",
    date: "2022-7-30",
    start_time: "10:00",
    end_time: "11:00",
    attendance: 3,
    social_link: "https://www.google.com/",
}

const setEventsMock = jest.fn();

describe("All tests for EventListItem component", () => {

    test("Checks that EventListItem component contains input event description", function () {
        render(
        <EventListItem data={testData} setEvents={setEventsMock} />
        );
    
        const domItem = screen.getByText(/Test Social/i);
        expect(domItem).toBeInTheDocument();
    });

    test("Checks that EventListItem component contains input host name", function () {
        render(
        <EventListItem data={testData} setEvents={setEventsMock} />
        );

        const domItem = screen.getByText(/Test Author/i);
        expect(domItem).toBeInTheDocument();
    });

    test("Checks that EventListItem component contains attendance checkbox", function () {
        render(
        <EventListItem data={testData} setEvents={setEventsMock} />
        );

        const domItem = screen.getByRole("checkbox");
        expect(domItem).toBeInTheDocument();
    });

    test("Checks that EventListItem component contains launch button", function () {
        render(
        <EventListItem data={testData} setEvents={setEventsMock} />
        );

        const domItem = screen.getByRole("button");
        expect(domItem).toBeInTheDocument();
    });

});