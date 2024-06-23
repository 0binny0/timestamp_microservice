
import {test, expect} from "vitest";
import {render, screen} from "@testing-library/react";

import {MemoryRouter} from "react-router-dom";

import {Home} from "../components.jsx";

test(
    `
    Verify that <Home /> provides information to the user
    on the accepted formats of a date in order to get timestamps
    for that date.
    `, () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Home />
            </MemoryRouter>
        );
        const heading = screen.getByText("Timestamp Generator");
        const date1_example = screen.getByText("YYYY-MM-DD");
        const date2_example = screen.getByText("-8640000000000000 >= date (in milliseconds) <= 8640000000000000");
        expect(heading).toBeVisible();
        expect(date1_example).toBeVisible();
        expect(date2_example).toBeVisible();
    }
);