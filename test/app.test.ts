import { sum } from "../src/app";
import { test, expect, describe } from "@jest/globals";

test("adds 5 + 5 = 10", () => {
  expect(sum(5, 5)).toBe(10);
});
