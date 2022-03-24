// Ionic & React
import { Component } from "react"
import { IonInput, IonSelect, IonSelectOption } from "@ionic/react"

import axios from "axios"
import styled from "styled-components"
import {
  AsYouType,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js"

export default class PhoneInput extends Component {
  state = {
    countries: [],
    selectedCountry: {
      country: "SE",
      code: "+46",
      template: "123 4567 890",
    },
    isValid: false,
  }

  componentDidMount() {
    axios.get("api/countries.json").then((res) => {
      this.setState({ countries: res.data })
    })
  }

  render() {
    const DTPhoneInputWrapper = styled("div")`
      display: flex;
      max-width: 284px;
    `

    const DTPhoneSelect = styled(IonSelect)`
      position: relative;
      height: 56px;
      min-width: 70px;
      margin-right: 14px;
      padding: 0 14px;
      color: var(--dt-dark);
      border: 1px solid var(--dt-dark);
      border-radius: 4px;
      background-color: transparent;

      &::part(placeholder),
      &::part(text) {
        flex: 0 0 auto;
      }
      &::part(placeholder) {
        opacity: 1;
        color: var(--dt-dark);
        font-size: 24px;
        font-weight: 300;
      }

      &::part(text) {
        color: var(--dt-dark);
        font-size: 24px;
        font-weight: 300;
      }
      &::part(icon) {
        display: none;
      }
    `

    const DTPhoneInput = styled(IonInput)`
      --color: var(--dt-dark);
      --padding-top: 0;
      --padding-start: 16px;
      --padding-end: 16px;
      --padding-bottom: 0;
      --background: transparent;
      --placeholder-color: #b5b5b5;
      --placeholder-opacity: 1;

      .native-input {
        position: relative;
        height: 56px;
        width: 100%;
        border: 1px solid var(--dt-dark);
        border-radius: 4px;
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 300;
      }
    `

    return (
      <>
        <DTPhoneInputWrapper>
          <DTPhoneSelect
            interface="action-sheet"
            value={this.state.selectedCountry.code}
            placeholder={this.state.selectedCountry.code}
            onIonChange={(e) => {
              const asYouType = new AsYouType(e.detail.value.cca2)
              asYouType.input("1234567890")
              this.setState({
                selectedCountry: {
                  country: e.detail.value.cca2,
                  code: e.detail.value.callingCodes[0],
                  template: asYouType.getTemplate(),
                },
              })
            }}
          >
            {this.state.countries.map((country) => (
              <IonSelectOption key={country.ccn3} value={country}>
                {country.flag} {country.callingCodes[0]} {country.name.common}
              </IonSelectOption>
            ))}
          </DTPhoneSelect>
          <DTPhoneInput
            type="tel"
            placeholder={this.state.selectedCountry.template}
            id="DTPhoneInput"
            onKeyDown={(e) => {
              e.target.value = new AsYouType(
                this.state.selectedCountry.country
              ).input(e.target.value)
            }}
            onKeyUp={(e) => {
              e.target.value = new AsYouType(
                this.state.selectedCountry.country
              ).input(e.target.value)
            }}
          />
        </DTPhoneInputWrapper>
      </>
    )
  }
}
