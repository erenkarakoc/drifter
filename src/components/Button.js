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
      iconColor,
      iconSize,
      iconHeight,
      iconWidth,
      className,
      ...buttonProps
    } = this.props

    const DTButton = styled(IonButton)`
      --background-focused: unset;
      --background-activated: unset;
      --background-hover: unset;

      height: 56px;
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
        color: #000;
        line-height: 1.2;
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

      ${theme === "fab" ? "flex-shrink: 0; height: 70px; width: 70px;" : ""}
      .theme-button-fab&::part(native) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 50%;
        background-color: var(--dt-primary);
        color: #fff;
      }
    `

    return (
      <DTButton
        className={`${
          theme ? " theme-button-" + theme : "theme-button-primary"
        } ${className ? className : ""}`}
        {...buttonProps}
      >
        {icon ? (
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
      </DTButton>
    )
  }
}
