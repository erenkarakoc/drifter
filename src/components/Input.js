import { PureComponent, memo } from "react"
import { IonInput } from "@ionic/react"

import styled from "styled-components"
import Icon from "./Icon"

class Input extends PureComponent {
  render() {
    const {
      id,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      label,
      labelMode,
      theme,
      cssClass,
      ...inputProps
    } = this.props

    const DTInputWrapper = styled("div")`
      position: relative;
      flex-shrink: 0;
      ${theme === "large" ? "height: 66px;" : "height: 50px;"}
      max-width: 300px;

      &.shake .native-input {
        border-color: var(--dt-purple);
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

      &.icon-left .native-input {
        padding: 0 22px 0 50px;
      }
      &.icon-left .icon-${icon} {
        left: 16px;
        right: unset;
      }
    `

    const DTInput = styled(IonInput)`
      height: 100%;
      width: 100%;
      flex-shrink: 0;
      font-family: var(--dt-font-family);

      .native-input {
        flex-shrink: 0;
        position: relative;
        height: 100%;
        width: 100%;
        padding: ${theme === "large" ? "0 20px" : "0 15px"};
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

      .native-input:focus {
        border-color: var(--dt-purple);
      }

      .icon-${icon} {
        pointer-events: none;
        position: absolute;
        right: 22px;
        transition: all 0.1s ease-out;
        z-index: 1;
      }

      &.has-value .icon-${icon} {
        fill: var(--dt-link);
      }
      &.has-value .native-input {
        border-color: var(--dt-link);
      }

      .DTLargeInputLabel {
        user-select: none;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 16px;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        padding: 0 3.5px;
        background-color: #fff;
        color: var(--dt-purple);
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        z-index: 1;
        transition: all 0.08s ease-out;
      }

      ${theme === "large" ? "caret-color: transparent;" : ""}

      &.label-mode-always:not(.has-focus):not(.has-value) {
        ${theme === "large" ? "caret-color: transparent;" : ""}

        .DTLargeInputLabel {
          top: 50%;
          color: var(--dt-link);
          height: 64px;
          font-size: 16px;
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
      <DTInputWrapper
        className={`label-mode-${labelMode ? labelMode : "always"} ${
          cssClass ? cssClass : ""
        }`}
      >
        <DTInput id={id ? id : ID} {...inputProps}>
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
      </DTInputWrapper>
    )
  }
}

export default memo(Input)
