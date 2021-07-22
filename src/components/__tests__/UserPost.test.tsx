import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserPost from "../UserPost";

describe("With React Testing UserPost Component", () => {
  it("Renders UserPost Component with correct values", () => {
    const post = {
      id: 1,
      userId: 2,
      title: "This is title",
      body: "This is body",
    };

    const initialState = {
      posts: {
        author: "seabook",
        loading: false,
        error: null,
        data: [post],
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserPost />
      </Provider>
    );

    expect(getByText("This is title")).not.toBeNull();
    expect(getByText("This is body")).not.toBeNull();
  });

  it("Renders UserPost Component with loading", () => {
    const initialState = {
      posts: {
        author: "",
        loading: true,
        error: null,
        data: [],
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserPost />
      </Provider>
    );

    expect(getByText("Loading...")).not.toBeNull();
  });

  it("Renders UserPost Component with loading", () => {
    const initialState = {
      posts: {
        author: "",
        loading: false,
        error: "Sth is wrong!",
        data: [],
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <UserPost />
      </Provider>
    );

    expect(getByText("Sth is wrong!")).not.toBeNull();
  });
});
