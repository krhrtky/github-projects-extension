import style from "./Item.module.scss";

type ItemProps = {
  name: string,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
};

export const Item = ({
                name,
                onMouseEnter,
                onMouseLeave,
              }: ItemProps) => (
  <li
    class={["Box-row", style.item].join(" ")}
    innerText={name}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />
);
