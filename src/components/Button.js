import { IonButton } from "@ionic/react"
import styled from "styled-components"
import Icon from "./Icon"

const Button = ({
  theme,
  text,
  icon,
  className,
  color,
  borderColor,
  hoverColor,
  activeColor,
  activeText,
  textTransform,
  ...buttonProps
}) => {
  const DTButton = styled(IonButton)`
    height: ${theme === "fab" ? "50px" : theme === "link" ? "18px" : "60px"};
    width: ${theme === "fab" ? "50px" : "100%"};
    max-width: 300px;
    text-transform: ${textTransform ? textTransform : "unset"};
    letter-spacing: unset;

    &::part(native) {
      border-radius: ${theme === "fab" ? "50%" : "unset"};
      box-shadow: unset;
    }

    .theme-button&::part(native) {
      user-select: none;
      border-radius: 15px;
      background-color: ${color ? color : "var(--dt-blue)"};
      border: 1px solid
        ${borderColor ? borderColor : color ? color : "var(--dt-blue)"};
      font-family: "Manrope", "sans-serif";
      font-size: 18px;
      font-weight: 600;
      transition: all 0.1s ease-out;

      &:active {
        background-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
        border-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
      }
    }

    .theme-button-rounded&::part(native) {
      user-select: none;
      border-radius: 50px;
      background-color: ${color ? color : "var(--dt-blue)"};
      border: 1px solid
        ${borderColor ? borderColor : color ? color : "var(--dt-blue)"};
      font-family: "Manrope", "sans-serif";
      font-size: 18px;
      font-weight: 600;
      transition: all 0.1s ease-out;

      &:active {
        background-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
        border-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
        color: ${activeText ? activeText : "#1f1f1f"};
      }
    }

    .theme-button-text&::part(native) {
      user-select: none;
      background-color: ${color ? color : "transparent"};
      border: none;
      border-radius: 15px;
      font-family: "Manrope", "sans-serif";
      font-size: 18px;
      font-weight: 600;
      transition: all 0.1s ease-out;
    }

    ${theme === "link" ? "width: fit-content;" : ""}
    .theme-button-link&::part(native) {
      padding: 0;
      background-color: unset;
      color: ${color ? color : "#ffffff"};
      transition: all 0.1s ease-out;
      --ripple-color: transparent;

      &:hover {
        opacity: 0.9;
        background-color: unset;
        color: ${color ? color : "#ffffff"};
      }
      &:active {
        background-color: unset;
        color: ${activeColor ? activeColor : "#fff"};
      }
    }
    .theme-button-link&::part(native)::after {
      content: none;
    }
  `

  return (
    <DTButton
      className={`${theme ? " theme-button-" + theme : "theme-button"} ${
        className ? className : ""
      }`}
      {...buttonProps}
    >
      {text}
      {icon ? <Icon name={icon} fill="#a2a2a2" height={20} width={40} /> : ""}
    </DTButton>
  )
}

export default Button
