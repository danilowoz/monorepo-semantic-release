import { isArray } from "danilowoz-test-utils";

class App {
  private data: Array<string> = [];

  get(): Array<string> {
    return this.data;
  }

  set(data: unknown): void {
    if (isArray(data)) {
      this.data = data;
    }
  }

  log(): void {
    console.log(this.data, "foo");
  }
}

export { App };
