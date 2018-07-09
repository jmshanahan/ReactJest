import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

describe("Suite to test comment reducers", () => {
  it("should handle actions of type SAVE_COMMENT", () => {
    const action = {
      type: SAVE_COMMENT,
      payload: "New Comment"
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(["New Comment"]);
  });
  it("should handle actions of type unknown", () => {
    const action = {
      type: "SHOULD_DO_NOTHING",
      payload: "New Comment"
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
  });
});
