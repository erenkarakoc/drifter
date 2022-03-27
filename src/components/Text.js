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
      otherStyles,
      cssClass,
      ...props
    } = this.props

    const DTText = styled("div")`
      ${margin ? "margin: " + margin + " !important;" : ""}

      ${children.type} {
        ${select ? "user-select: " + select + " !important;" : ""}
        ${color ? "color: " + color + " !important;" : "color: #000 !important;"}
        ${size
          ? "font-size: " +
            size +
            (Number.isInteger(size) ? "px !important;" : " !important;")
          : ""}
        ${weight ? "font-weight: " + weight + " !important;" : ""}
        ${align ? "text-align: " + align + " !important;" : ""}
        ${spacing ? "letter-spacing: " + spacing + " !important;" : ""}
        ${lineHeight ? "line-height: " + lineHeight + " !important;" : ""}
        ${activeColor ? "&:active {color: " + activeColor + ";}" : ""}
        ${otherStyles ? otherStyles : ""}

        margin: 0;
      }
    `

    return (
      <DTText className={`Text ${cssClass ? cssClass : ""}`} {...props}>
        {children}
      </DTText>
    )
  }
}
