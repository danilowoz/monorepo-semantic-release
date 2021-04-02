import { isArray } from "danilowoz-test-utils";

class App {
  private data: Array<any> = [];

  get() {
    return this.data;
  }

  set(data: unknown) {
    if (isArray(data)) {
      this.data = data;
    }
  }
}

export { App };
