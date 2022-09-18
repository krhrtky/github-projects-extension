import { menuOpened } from "../state";
import { Menu } from "./Menu";
import { Content } from "./Content";
import style from "./App.module.scss";

export const App = () => {
  const [value, ] = menuOpened;

  return (
    <div style={style.app}>
      { value() ? <Content /> : <Menu /> }
    </div>
  );
}
