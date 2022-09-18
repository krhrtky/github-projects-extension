import { menuOpened } from "../../state";
import icon from "@primer/octicons";
import { Item } from "./Item";

const COLUMN_DATA_ATTRIBUTE = "data-board-column";
const IGNORE_ID = "#no_vertical_group";
const COLUMN_PARENT = document.querySelector("#memex-project-view-root > div.Box-sc-1gh2r6s-0.lotTPN > div.Box-sc-1gh2r6s-0.cFrosQ");

export const Content = () => {
  const [, setMenuOpened] = menuOpened;
  const columns = document
    .querySelectorAll<HTMLElement>(
      `div[${COLUMN_DATA_ATTRIBUTE}]:not(${IGNORE_ID})`
    );

  const columnKeyElementMap = Array
    .from(columns)
    .reduce((prev, current) => {
    const key = current.getAttribute(COLUMN_DATA_ATTRIBUTE);

    if (key == null) {
      return prev;
    }
    return prev
      .set(
        key,
        current,
      );
  }, new Map<string, HTMLElement>());

  const action = (func: (element: HTMLElement) => void) => (key: string) => () => {
    const maybeElm = columnKeyElementMap.get(key);
    if (maybeElm == undefined) {
      return;
    }
    func(maybeElm);
  }

  const onHover = action(element => {
    if (COLUMN_PARENT == null) {
      return;
    }

    element.style.border = "3px solid red";
    COLUMN_PARENT.scroll(element.getBoundingClientRect().x, 0);
  });

  const onHoverLeft = action(element => {
    element.style.border = "";
  });

  return (
    <div
      class="Box d-flex flex-column anim-fade-in fast"
      style={{
        width: "200px",
      }}
    >
      <div class="Box-header">
        <button
          class="Box-btn-octicon btn-octicon float-right"
          type="button"
          aria-label="Close dialog"
          innerHTML={icon["x"]?.toSVG()}
          onClick={() => setMenuOpened(() => false)}
        />
      <h3 class="Box-title">Columns</h3>
    </div>
      <div class="overflow-auto">
        <ul>
          {
            Array
              .from(columnKeyElementMap.keys())
              .map(name => (
                <Item
                  name={name}
                  onMouseEnter={onHover(name)}
                  onMouseLeave={onHoverLeft(name)}
                />
              ))
          }
        </ul>
      </div>
    </div>
  );
}

