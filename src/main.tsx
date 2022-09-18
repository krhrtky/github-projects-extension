import { render } from "solid-js/web";
import { App } from './components';
import "@primer/css/index.scss";

const dispose = render(() => <App />, document.body);

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}
