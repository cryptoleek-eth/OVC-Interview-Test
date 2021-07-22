import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserTable from "../UserTable";
import thunk from "redux-thunk";

describe("With React Testing UserTable Component", () => {
  it("Renders UserTable Component with correct values", () => {
    const user = {
      id: 1,
      name: "seabook",
      email: "This is email",
      city: "This is city",
      company: "This is company"
    };

    const initialState = {
      users: {
        loading: false,
        error: null,
        data: [user],
      },
    };
    const mockStore = configureStore([thunk]);
    let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserTable />
      </Provider>
    );

    expect(getByText("This is email")).not.toBeNull();
    expect(getByText("This is city")).not.toBeNull();
    expect(getByText("This is company")).not.toBeNull();
    expect(getByText("seabook")).not.toBeNull();
  });

  it("Renders UserTable Component with loading", () => {
    const initialState = {
      users: {
        loading: true,
        error: null,
        data: [],
      },
    };
     const mockStore = configureStore([thunk]);
     let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserTable />
      </Provider>
    );

    expect(getByText("Loading...")).not.toBeNull();
  });

  it("Renders UserTable Component with loading", () => {
    const initialState = {
      users: {
        loading: false,
        error: "Sth is wrong!",
        data: [],
      },
    };
    const mockStore = configureStore([thunk]);
    let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserTable />
      </Provider>
    );

    expect(getByText("Sth is wrong!")).not.toBeNull();
  });
});
