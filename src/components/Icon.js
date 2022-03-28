import Icons from "../assets/icons/icons.svg"

const Icon = ({ name, fill, size, height, width, ...props }) => (
  <svg
    className={`icon icon-${name}`}
    fill={fill ? fill : "none"}
    height={height ? height : size ? size : 24}
    width={width ? width : size ? size : 24}
    {...props}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
)

export default Icon
