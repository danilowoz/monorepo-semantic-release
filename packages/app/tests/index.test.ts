import { App } from "danilowoz-test-app";

describe("App", () => {
  test("set", () => {
    const app = new App();

    expect(app.get()).toStrictEqual([]);

    app.set(["foo"]);

    expect(app.get()).toStrictEqual(["foo"]);
  });

  test("set fail", () => {
    const app = new App();

    expect(app.get()).toStrictEqual([]);

    app.set(false);

    expect(app.get()).toStrictEqual([]);
  });
});
