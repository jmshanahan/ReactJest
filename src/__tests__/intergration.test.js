import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "./../Root";
import { COMMENTS_URL } from "../actions";
import App from "../components/App";

describe("async tests for fetching comments and displaying them", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(COMMENTS_URL, {
      status: 200,
      response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should fetch a list of comments and display them", done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );
    wrapped.find(".fetch-comments").simulate("click");
    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find("li").length).toEqual(2);
      wrapped.unmount();
      done();
    });
  });
});
