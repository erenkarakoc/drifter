import { Component } from "react"
import { IonButton } from "@ionic/react"

import styled from "styled-components"

import Icon from "./Icon"

export default class Button extends Component {
  render() {
    const {
      children,
      theme,
      margin,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      ...buttonProps
    } = this.props

    const DTButton = styled(IonButton)`
      --background-focused: unset;
      --background-activated: unset;
      --background-hover: unset;

      height: 74px;
      ${margin ? "margin: " + margin + ";" : "margin: 0;"}
      text-transform: unset;
      letter-spacing: unset;

      &::part(native) {
        background-color: unset;
        border-radius: ${theme === "fab" ? "50%" : "unset"};
        box-shadow: unset;
      }

      .theme-button-primary&::part(native) {
        user-select: none;
        min-width: 236px;
        background-color: var(--dt-dark);
        color: var(--dt-background);
        font-size: 24px;
        font-weight: 600;
        transition: all 0.1s ease-out;
      }

      ${theme === "link" ? "height: fit-content; width: fit-content;" : ""}
      .theme-button-link&::part(native) {
        padding: 0;
        background-color: unset;
        transition: all 0.1s ease-out;
        line-height: 1.2;
        --ripple-color: transparent;
        &:hover {
          opacity: 0.9;
          background-color: unset;
        }
        &:active {
          background-color: unset;
        }
      }
      .theme-button-link&::part(native)::after {
        content: none;
      }
    `

    return (
      <DTButton
        className={`${
          theme ? " theme-button-" + theme : "theme-button-primary"
        }`}
        {...buttonProps}
      >
        {icon ? (
          <Icon
            name={icon}
            fill={iconFill ? iconFill : "#a2a2a2"}
            height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
            width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
            size={iconSize ? iconSize : 24}
          />
        ) : (
          ""
        )}
        {children}
      </DTButton>
    )
  }
}
