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
      --background-focus: unset !important;
      --background-active: unset !important;
      --background-hover: unset !important;

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

        &:hover {
          background-color: var(--dt-dark);
        }
        &:active {
          background-color: var(--dt-dark);
        }
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
