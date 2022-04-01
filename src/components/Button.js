// Ionic & React
import { Component } from "react"
import { IonButton } from "@ionic/react"

// Plugins
import styled from "styled-components"

// Components
import Icon from "./Icon"

export default class Button extends Component {
  render() {
    const {
      children,
      theme,
      margin,
      icon,
      iconColor,
      iconSize,
      iconHeight,
      iconWidth,
      iconLeft,
      color,
      fontSize,
      fontWeight,
      cssClass,
      ...buttonProps
    } = this.props

    const DTButton = styled(IonButton)`
      --background-focused: unset;
      --background-activated: unset;
      --background-hover: unset;
      flex-shrink: 0;

      height: 56px;
      ${margin ? "margin: " + margin + ";" : "margin: 0;"}
      text-transform: unset;
      letter-spacing: unset;

      &::part(native) {
        flex-shrink: 0;
        background-color: unset;
        border-radius: ${theme === "fab" ? "50%" : "unset"};
        box-shadow: unset;
      }

      .theme-button-primary&::part(native) {
        user-select: none;
        width: 188px;
        border-radius: 56px;
        background-color: var(--dt-purple);
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        transition: all 0.1s ease-out;
      }

      ${theme === "link"
        ? "height: fit-content; width: fit-content !important;"
        : ""}
      .theme-button-link&::part(native) {
        width: fit-content;
        padding: 0;
        background-color: unset;
        transition: all 0.1s ease-out;
        color: ${color ? color : "var(--dt-link)"};
        font-size: ${fontSize ? fontSize : "14px"};
        font-weight: ${fontWeight ? fontWeight : "500"};
        line-height: 17px;
        --ripple-color: transparent;

        &:hover {
          background-color: unset;
        }
        &:active {
          opacity: 0.9;
          background-color: unset;
        }
      }
      .theme-button-link&::part(native)::after {
        content: none;
      }
      &.theme-button-link .icon {
        ${iconLeft ? "margin-right: 4px;" : "margin-left: 4px;"}
      }

      ${theme === "fab"
        ? "flex-shrink: 0; height: 70px; width: 70px; border-radius: 50%;"
        : ""}
      .theme-button-fab&::part(native) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 50%;
        background-color: var(--dt-primary);
        color: #fff;
      }

      &::part(native) {
        ${color ? "color: " + color + " !important;" : ""}
        ${fontSize ? "font-size: " + fontSize + " !important;" : ""}
        ${fontWeight ? "font-weight: " + fontWeight + " !important;" : ""}
      }
    `

    return (
      <DTButton
        className={`${
          theme ? " theme-button-" + theme : "theme-button-primary"
        } ${cssClass ? cssClass : ""}`}
        {...buttonProps}
      >
        {icon && iconLeft ? (
          <Icon
            name={icon}
            fill={iconColor ? iconColor : "#fff"}
            height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
            width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
            size={iconSize ? iconSize : 24}
          />
        ) : (
          ""
        )}
        {children}
        {icon && !iconLeft ? (
          <Icon
            name={icon}
            fill={iconColor ? iconColor : "#fff"}
            height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
            width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
            size={iconSize ? iconSize : 24}
          />
        ) : (
          ""
        )}
      </DTButton>
    )
  }
}
