import { Component, memo } from "react"
import { IonInput } from "@ionic/react"

import styled from "styled-components"
import Icon from "./Icon"

class Input extends Component {
  render() {
    const {
      id,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      label,
      theme,
      cssClass,
      ...inputProps
    } = this.props

    const DTInput = styled(IonInput)`
      flex-shrink: 0;
      flex-grow: 0;
      max-width: 300px;
      font-family: "Montserrat", sans-serif;

      .native-input {
        flex-shrink: 0;
        position: relative;
        ${theme === "large" ? "height: 66px;" : "height: 50px;"}
        width: 100%;
        padding: ${theme === "large" ? "0 20px" : "15px 0"};
        border: 1px solid var(--dt-border-light);
        border-radius: ${theme === "large" ? "8px" : "4px"};
        background-color: transparent;
        color: #000;
        font-size: ${theme === "large" ? "17px" : "15px"};
        font-weight: 400;
        transition: all 0.1s ease-out;

        &::placeholder {
          color: #999;
        }
      }

      &.success .native-input {
        border-color: var(--dt-success);
      }
      &.error .native-input {
        border-color: var(--dt-error);
      }
      &.warning .native-input {
        border-color: var(--dt-warning);
      }
      &.info .native-input {
        border-color: var(--dt-info);
      }
      .native-input:focus {
        border-color: var(--dt-purple);
      }

      .icon-${icon} {
        position: absolute;
        right: 22px;
        transition: all 0.1s ease-out;
        z-index: 1;
      }

      &.has-value .icon-${icon} {
        fill: #666;
      }

      &.icon-left .native-input {
        padding: 0 22px 0 50px;
      }
      &.icon-left .icon-${icon} {
        left: 16px;
        right: unset;
      }

      .DTLargeInputLabel {
        pointer-events: none;
        user-select: none;
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
        padding: 0 3.5px;
        background-color: #fff;
        color: var(--dt-link);
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        z-index: 1;
        transition: all 0.08s ease-out;
      }

      ${theme === "large" ? "caret-color: transparent;" : ""}

      &.has-focus {
        ${theme === "large" ? "caret-color: transparent;" : ""}

        .DTLargeInputLabel {
          top: 0;
          font-size: 14px;
          color: var(--dt-purple);
          height: 20px;
        }
      }
    `

    function guidGenerator() {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
      )
    }

    const ID = guidGenerator()

    return (
      <>
        <DTInput
          id={id ? id : ID}
          className={cssClass ? cssClass : ""}
          {...inputProps}
        >
          {icon ? (
            <Icon
              name={icon}
              fill={iconFill ? iconFill : "#a2a2a2"}
              size={iconSize ? iconSize : 24}
              height={iconSize ? iconSize : iconHeight ? iconHeight : 24}
              width={iconSize ? iconSize : iconWidth ? iconWidth : 24}
            />
          ) : (
            ""
          )}
          {label ? (
            <label
              htmlFor={id ? id : ID}
              className={
                theme === "large" ? "DTLargeInputLabel" : "DTInputLabel"
              }
            >
              {label}
            </label>
          ) : (
            ""
          )}
        </DTInput>
      </>
    )
  }
}

export default memo(Input)
