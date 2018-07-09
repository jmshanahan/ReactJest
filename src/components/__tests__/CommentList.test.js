import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../Root";

describe("Tests the comment List component", () => {
  let wrapped;
  beforeEach(() => {
    const initialState = {
      comments: ["Comment 1", "Comment 2"]
    };
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });
  it('Should create one "li" per comment', () => {
    expect(wrapped.find("li").length).toBe(2);
  });
  it("shows the text for each comment", () => {
    // kk
    expect(wrapped.render().text()).toContain("Comment 1");
    expect(wrapped.render().text()).toContain("Comment 2");
  });
});
