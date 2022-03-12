import { Component } from "react"
import { IonButton } from "@ionic/react"

import styled from "styled-components"

import Icon from "./Icon"

export default class Button extends Component {
  render() {
    const {
      theme,
      text,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      className,
      color,
      textColor,
      borderColor,
      activeColor,
      activeText,
      textTransform,
      ...buttonProps
    } = this.props

    const DTButton = styled(IonButton)`
      height: ${theme === "fab" ? "50px" : theme === "link" ? "unset" : "60px"};
      width: ${theme === "fab" ? "50px" : "100%"};
      max-width: 300px;
      text-transform: ${textTransform ? textTransform : "unset"};
      letter-spacing: unset;

      ${theme === "link"
        ? "display: inline-block; margin: 0; margin-inline: 0;"
        : ""}

      &::part(native) {
        background-color: ${color ? color : "var(--dt-blue)"};
        border-radius: ${theme === "fab" ? "50%" : "unset"};
        box-shadow: unset;
      }

      .theme-button&::part(native) {
        user-select: none;
        border-radius: 15px;
        background-color: ${color ? color : "var(--dt-blue)"};
        border: 1px solid
          ${borderColor ? borderColor : color ? color : "var(--dt-blue)"};
        color: ${textColor ? textColor : "#000"};
        font-family: "Manrope", "sans-serif";
        font-size: 18px;
        font-weight: 600;
        transition: all 0.1s ease-out;

        &:hover {
          background-color: ${color ? color : "var(--dt-blue)"} !important;
          border-color: ${borderColor
            ? borderColor
            : color
            ? color
            : "var(--dt-blue)"} !important;
          color: ${textColor ? textColor : "#000"} !important;
        }
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
        color: ${textColor ? textColor : "#000"};
        font-family: "Manrope", "sans-serif";
        font-size: 18px;
        font-weight: 600;
        transition: all 0.1s ease-out;

        &:hover {
          background-color: ${color ? color : "var(--dt-blue)"} !important;
          border-color: ${borderColor
            ? borderColor
            : color
            ? color
            : "var(--dt-blue)"} !important;
          color: ${textColor ? textColor : "#000"} !important;
        }
        &:active {
          background-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
          border-color: ${activeColor ? activeColor : "var(--dt-blue-3)"};
          color: ${activeText ? activeText : "#1f1f1f"};
        }
      }

      .theme-button-text&::part(native) {
        user-select: none;
        background-color: ${color ? color : "transparent"};
        color: ${textColor ? textColor : "#000"};
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
        color: ${textColor ? textColor : "#ffffff"};
        transition: all 0.1s ease-out;
        line-height: 1.2;
        --ripple-color: transparent;

        &:hover {
          opacity: 0.9;
          background-color: unset;
          color: ${textColor ? textColor : "#ffffff"};
        }
        &:active {
          background-color: unset;
          color: ${activeText ? activeText : "#ffffff"};
        }
      }
      .theme-button-link&::part(native)::after {
        content: none;
      }

      &:not(.theme-button-fab) svg,
      &:not(.theme-button-fab) img {
        margin-right: 10px;
      }
    `

    return (
      <DTButton
        className={`${theme ? " theme-button-" + theme : "theme-button"} ${
          className ? className : ""
        }`}
        {...buttonProps}
      >
        {icon ? (
          <Icon
            name={icon}
            fill={iconFill ? iconFill : "#a2a2a2"}
            height={iconHeight ? iconHeight : 24}
            width={iconWidth ? iconWidth : 24}
            size={iconSize ? iconSize : 24}
          />
        ) : (
          ""
        )}
        {text}
      </DTButton>
    )
  }
}
