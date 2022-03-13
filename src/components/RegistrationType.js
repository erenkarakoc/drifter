import { Component } from "react"
import { IonRadio, IonLabel } from "@ionic/react"

import styled from "styled-components"

import Icon from "./Icon"

export default class RegistrationType extends Component {
  render() {
    const { type, text, name, value, id, checked } = this.props

    const RegistrationLabel = styled(IonLabel)`
      aspect-ratio: 1.08 / 1;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 140px;
      padding: 16px;
      border: 2px solid var(--dt-primary-600);
      border-radius: 16px;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        visibility: hidden;
        height: 32px;
        width: 32px;
        border-radius: 0 0 0 16px;
        background-color: var(--dt-pink);
        background-image: url("data:image/svg+xml,%3Csvg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8406 2.03635C14.9087 1.87843 14.9439 1.70823 14.9438 1.53622C14.9438 1.36421 14.9085 1.19403 14.8403 1.03615C14.772 0.87827 14.6722 0.736022 14.5469 0.618158C14.4216 0.500294 14.2736 0.409306 14.1118 0.350792C13.9501 0.292277 13.7781 0.267472 13.6064 0.277904C13.4347 0.288335 13.2669 0.333782 13.1135 0.411449C12.9624 0.487877 12.8284 0.593916 12.7192 0.72322L5.0841 8.80695L2.46325 5.81142C2.35713 5.6811 2.22602 5.57329 2.07761 5.49435C1.92767 5.41459 1.76316 5.36594 1.59395 5.35132C1.42474 5.33671 1.25433 5.35642 1.09292 5.40929C0.931523 5.46215 0.782465 5.54707 0.654691 5.65896C0.526918 5.77084 0.423062 5.90739 0.349357 6.0604C0.275651 6.21341 0.233612 6.37973 0.225765 6.54939C0.217918 6.71904 0.244424 6.88853 0.303692 7.04769C0.362342 7.2052 0.451881 7.34937 0.567024 7.47175L4.10146 11.5107C4.21722 11.6437 4.35959 11.7509 4.51937 11.8255C4.67917 11.9001 4.85283 11.9403 5.02914 11.9436C5.20545 11.9469 5.38049 11.9132 5.54296 11.8446C5.70535 11.7761 5.85174 11.6741 5.97235 11.5456L14.5531 2.44915C14.6757 2.33227 14.7734 2.19188 14.8406 2.03635Z' fill='white'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 14px;
      }

      ${checked
        ? `
          border-color: var(--dt-pink);

          &:after {
            opacity: 1;
            visibility: visible;
          }
        `
        : ""}

      .RegRadioText {
        margin: 10px 0 0;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }

      & svg,
      & img {
        pointer-events: none;
      }
    `

    const RegistrationRadio = styled(IonRadio)`
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      height: 100%;
      width: 100%;
      border-radius: 16px;
    `

    return (
      <RegistrationLabel for={id}>
        <RegistrationRadio name={name} value={value} id={id} />
        <Icon name={"reg-" + type} fill="#a2a2a2" width={52} height={42} />
        <span className="RegRadioText">{text}</span>
      </RegistrationLabel>
    )
  }
}
