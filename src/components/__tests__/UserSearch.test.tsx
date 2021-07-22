import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserSearch from "../UserSearch";
import thunk from "redux-thunk";

describe("With React Testing UserSearch Component", () => {
  it("Renders UserSearch Component with correct values", () => {
    const mockStore = configureStore([thunk]);
    let store = mockStore({});
    const userSearch = render(
      <Provider store={store}>
        <UserSearch />
      </Provider>
    );

    userEvent.type(screen.getByTestId("search-input"), "seabook");

  });
});
