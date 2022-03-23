// Ionic & React
import { Component } from "react"
import { IonInput, IonSelect, IonSelectOption } from "@ionic/react"

import axios from "axios"
import styled from "styled-components"

export default class PhoneInput extends Component {
  state = {
    countries: [],
    selectedCountryCode: "+46",
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
      margin-right: 18px;
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
        color: #b5b5b5;
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
        text-align: center;
      }
    `

    return (
      <>
        <DTPhoneInputWrapper>
          <DTPhoneSelect
            interface="action-sheet"
            value={this.state.selectedCountryCode}
            placeholder="+43"
            onIonChange={(e) => {
              this.setState({
                selectedCountryCode: e.detail.value[0],
              })
            }}
          >
            {this.state.countries.map((country) => (
              <IonSelectOption key={country.ccn3} value={country.callingCodes}>
                {country.flag} {country.callingCodes} {country.name.common}
              </IonSelectOption>
            ))}
          </DTPhoneSelect>
          <DTPhoneInput
            type="tel"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            placeholder="735 44 55 36"
            maxlength="11"
            onKeyDown={(e) => {
              if (e.which < 48 || e.which > 57) e.preventDefault()
            }}
            onKeyUp={(e) => {
              e.target.value = e.target.value
                .replace(/[^\dA-Z]/g, "")
                .replace(
                  /([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{2})/g,
                  "$1 $2 $3 $4"
                )
                .trim()
            }}
          />
        </DTPhoneInputWrapper>
      </>
    )
  }
}
