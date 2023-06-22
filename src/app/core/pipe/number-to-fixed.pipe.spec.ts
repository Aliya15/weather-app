import { NumberToFixedPipe } from "./number-to-fixed.pipe";

describe("NumberToFixedPipe", () => {
  it("create an instance", () => {
    const pipe = new NumberToFixedPipe();
    expect(pipe).toBeTruthy();
  });
});
