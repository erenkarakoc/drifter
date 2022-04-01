// React
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Plugins
import styled from "styled-components"

const SpinWrapper = styled("span")`
  position: relative;
  display: flex;

  .SpinnerTimer {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--dt-link);
    font-size: 26px;
    font-weight: 500;
  }
`

const Spin = styled("span")`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  animation: spinAnimation 3s linear infinite;

  svg {
    height: 100%;
    width: 100%;
  }
`
const Spinner = ({
  size,
  margin,
  reset,
  resetTimer,
  count,
  setCount,
  setIsCountEnd,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState(count)

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      const timeout = setTimeout(() => {
        if (reset) {
          setTimeLeft(count)
          resetTimer(false)
          clearTimeout(timeout)
        }

        if (!reset) {
          if (timeLeft >= 1) {
            setTimeLeft(timeLeft - 1)
            setIsCountEnd(false)
          } else {
            setTimeLeft(0)
            setIsCountEnd(true)
          }
        }
      }, 1000)
    }
  })

  return (
    <SpinWrapper
      className="Spinner"
      style={{ margin: margin ? margin : "0" }}
      {...props}
    >
      <Spin>
        <svg
          width={size}
          height={size}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.01905e-06 256C1.01905e-06 205.368 15.0141 155.873 43.1438 113.774C71.2734 71.6751 111.255 38.863 158.033 19.4869C204.811 0.11092 256.284 -4.95873 305.943 4.91908C355.602 14.7969 401.217 39.1785 437.019 74.9808C472.822 110.783 497.203 156.398 507.081 206.057C516.959 255.716 511.889 307.189 492.513 353.967C473.137 400.745 440.325 440.727 398.226 468.856C356.127 496.986 306.632 512 256 512C222.381 512.003 189.09 505.383 158.029 492.519C126.969 479.655 98.7464 460.798 74.974 437.026C51.2016 413.254 32.3449 385.031 19.4807 353.971C6.61659 322.91 -0.00299869 289.619 1.01905e-06 256ZM171.656 56.3815C125.559 75.8024 87.6045 110.579 64.2372 154.807C40.8699 199.035 33.5304 249.987 43.465 299.012C53.3997 348.036 79.9959 392.112 118.738 423.753C157.48 455.395 205.979 472.653 256 472.596C298.86 472.643 340.771 459.967 376.421 436.175C412.071 412.383 439.858 378.544 456.26 338.946C472.663 299.349 476.943 255.773 468.559 213.741C460.175 171.708 439.504 133.11 409.164 102.836C378.669 72.3684 339.788 51.6789 297.482 43.4076C255.176 35.1363 211.365 39.6584 171.641 56.3967L171.656 56.3815Z"
            fill="url(#paint0_linear_92_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_92_5"
              x1="429.568"
              y1="412.672"
              x2="77.312"
              y2="28.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB2B2" stopOpacity="0" />
              <stop offset="1" stopColor="#B12083" />
            </linearGradient>
          </defs>
        </svg>
      </Spin>

      {count ? <span className="SpinnerTimer">{timeLeft}</span> : ""}
    </SpinWrapper>
  )
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  margin: PropTypes.string,
}

export default Spinner
