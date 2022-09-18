import icon from "@primer/octicons"
import { menuOpened } from "../../state";

export const Menu = () => {
  const [, setMenuOpened] = menuOpened;

  return <button
      class="btn"
      type="button"
      onClick={() => setMenuOpened(() => true)}
      innerHTML={icon["three-bars"]?.toSVG()}
    />
}
