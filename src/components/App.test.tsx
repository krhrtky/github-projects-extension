import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "solid-testing-library";
import { App } from "./App";
import { menuOpened } from "../state";

describe(App.name, () => {
  afterEach(cleanup);

  it("is menu opened", () => {
    const [, setState] = menuOpened;
    setState(() => true);

    const { container } = render(() => <App/>);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("is not menu opened", () => {
    const [, setState] = menuOpened;
    setState(() => false);

    const { container } = render(() => <App/>);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
