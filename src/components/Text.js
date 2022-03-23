import { Component } from "react"
import styled from "styled-components"

export default class Text extends Component {
  render() {
    const {
      children,
      color,
      activeColor,
      size,
      weight,
      lineHeight,
      margin,
      align,
      spacing,
      select,
      className,
      ...props
    } = this.props

    const DTText = styled("div")`
      ${select ? "user-select: " + select + " !important;" : ""}
      ${children.type} {
        ${color ? "color: " + color + " !important;" : ""}
        ${size
          ? "font-size: " +
            size +
            (Number.isInteger(size) ? "px !important;" : " !important;")
          : ""}
        ${weight ? "font-weight: " + weight + " !important;" : ""}
        ${align ? "text-align: " + align + " !important;" : ""}
        ${spacing ? "letter-spacing: " + spacing + " !important;" : ""}
        ${lineHeight ? "line-height: " + lineHeight + " !important;" : ""}
        ${margin ? "margin: " + margin + " !important;" : ""}
        ${activeColor ? "&:active {color: " + activeColor + ";}" : ""}
      }
    `

    return (
      <DTText
        className={
          "Text Text-" + children.type + " " + className ? className : ""
        }
        {...props}
      >
        {children}
      </DTText>
    )
  }
}
