import { Component } from "react"
import { IonInput } from "@ionic/react"

import styled from "styled-components"
import Icon from "./Icon"

export default class Input extends Component {
  render() {
    const {
      className,
      borderColor,
      icon,
      iconFill,
      iconSize,
      iconHeight,
      iconWidth,
      type,
      theme,
      ...inputProps
    } = this.props

    const DTInput = styled(IonInput)`
      flex-shrink: 0;
      flex-grow: 0;
      max-width: 300px;

      .native-input {
        position: relative;
        height: ${className && className.includes("rounded") ? "50px" : "60px"};
        width: 100%;
        padding: 0 62px 0 22px;
        border: 2px solid ${borderColor ? borderColor : "transparent"};
        border-radius: ${className && className.includes("rounded")
          ? "30px"
          : "15px"};
        background-color: #fff;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        transition: all 0.1s ease-out;

        &::placeholder {
          color: var(--dt-black-4);
        }
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
    `

    return (
      <>
        <DTInput
          className={className}
          type={`${type ? type : "text"}`}
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
        </DTInput>
      </>
    )
  }
}
