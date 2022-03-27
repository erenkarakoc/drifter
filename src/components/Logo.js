// Logos
import { ReactComponent as LogoVertical } from "../assets/logo/logo-vertical.svg"
import { ReactComponent as LogoVerticalDark } from "../assets/logo/logo-vertical-dark.svg"
import { ReactComponent as LogoVerticalGradient } from "../assets/logo/logo-vertical-gradient.svg"
import { ReactComponent as Mono } from "../assets/logo/mono.svg"
import { ReactComponent as MonoDark } from "../assets/logo/mono-dark.svg"
import { ReactComponent as MonoGradient } from "../assets/logo/mono-gradient.svg"
import { ReactComponent as LogoLight } from "../assets/logo/logo.svg"
import { ReactComponent as LogoDark } from "../assets/logo/logo-dark.svg"
import { ReactComponent as LogoGradient } from "../assets/logo/logo-gradient.svg"
import { ReactComponent as LogoGradient2 } from "../assets/logo/logo-gradient-2.svg"
import { ReactComponent as Logotype } from "../assets/logo/logotype.svg"
import { ReactComponent as LogotypeDark } from "../assets/logo/logotype-dark.svg"

const Logo = ({ type, height, width, ...props }) => {
  const LogoSelected = () => {
    if (type && type === "LogoVertical") {
      return <LogoVertical style={{ height: height, width: width }} />
    } else if (type === "LogoVerticalDark") {
      return <LogoVerticalDark style={{ height: height, width: width }} />
    } else if (type === "LogoVerticalGradient") {
      return <LogoVerticalGradient style={{ height: height, width: width }} />
    } else if (type === "Mono") {
      return <Mono style={{ height: height, width: width }} />
    } else if (type === "MonoDark") {
      return <MonoDark style={{ height: height, width: width }} />
    } else if (type === "MonoGradient") {
      return <MonoGradient style={{ height: height, width: width }} />
    } else if (type === "LogoDark") {
      return <LogoDark style={{ height: height, width: width }} />
    } else if (type === "LogoGradient") {
      return <LogoGradient style={{ height: height, width: width }} />
    } else if (type === "LogoGradient2") {
      return <LogoGradient2 style={{ height: height, width: width }} />
    } else if (type === "Logotype") {
      return <Logotype style={{ height: height, width: width }} />
    } else if (type === "LogotypeDark") {
      return <LogotypeDark style={{ height: height, width: width }} />
    } else {
      return <LogoLight style={{ height: height, width: width }} />
    }
  }

  return (
    <div
      className="Logo"
      style={{ height: height + "px", width: width + "px" }}
      {...props}
    >
      <LogoSelected />
    </div>
  )
}

export default Logo
