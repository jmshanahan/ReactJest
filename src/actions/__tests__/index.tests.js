import { saveComment } from "../";
import { SAVE_COMMENT } from "../types";

describe("Tests for the saveComment action creator", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toBe(SAVE_COMMENT);
  });
  it("has the correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toBe("New Comment");
  });
});
