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

const Logo = ({ type }) => {
  const LogoSelected = () => {
    if (type && type === "LogoVertical") {
      return <LogoVertical />
    } else if (type === "LogoVerticalDark") {
      return <LogoVerticalDark />
    } else if (type === "LogoVerticalGradient") {
      return <LogoVerticalGradient />
    } else if (type === "Mono") {
      return <Mono />
    } else if (type === "MonoDark") {
      return <MonoDark />
    } else if (type === "MonoGradient") {
      return <MonoGradient />
    } else if (type === "LogoDark") {
      return <LogoDark />
    } else if (type === "LogoGradient") {
      return <LogoGradient />
    } else if (type === "LogoGradient2") {
      return <LogoGradient2 />
    } else if (type === "Logotype") {
      return <Logotype />
    } else if (type === "LogotypeDark") {
      return <LogotypeDark />
    } else {
      return <LogoLight />
    }
  }

  return (
    <div className="Logo">
      <LogoSelected />
    </div>
  )
}

export default Logo
