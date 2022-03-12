import Icons from "../assets/icons/icons.svg"
import PropTypes from "prop-types"

const Icon = ({ name, fill, size, height, width }) => (
  <svg
    className={`icon icon-${name}`}
    fill={fill}
    height={height ? height : size ? size : 24}
    width={width ? width : size ? size : 24}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Icon
