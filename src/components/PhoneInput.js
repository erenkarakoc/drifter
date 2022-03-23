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
      .native-input {
        position: relative;
        height: 56px;
        width: 100%;
        padding: 0 16px;
        border: 1px solid var(--dt-dark);
        border-radius: 4px;
        background-color: transparent;
        color: var(--dt-dark);
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 300;
        text-align: center;

        &::placeholder {
          color: #b5b5b5;
          opacity: 1;
        }
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
            placeholder="735 44 55 36"
            maxlength="10"
            onKeyUp={(e) => {
              e.target.value.replace(/(\d{3})\D?(\d{4})\D?(\d{4})/, "$1 $2 $3")
            }}
          />
        </DTPhoneInputWrapper>
      </>
    )
  }
}
