// Ionic & React
import { Component, useState, useEffect, useRef } from "react"
import { IonContent, IonModal, IonButton, IonList } from "@ionic/react"

import PropTypes from "prop-types"

// React Phone Number Input
import "react-phone-number-input/style.css"
import Input from "react-phone-number-input/input"
import { getCountryCallingCode, getCountries } from "react-phone-number-input"
import Text from "./Text"

// Plugins
import styled from "styled-components"
import ReactCountryFlag from "react-country-flag"

const DTPhoneInputWrapper = styled("div")`
  display: flex;
  height: 42px;
  width: 100%;
  padding: 0 14px;
  border-bottom: 1px solid var(--dt-border);
`

const DTToggleModal = styled(IonButton)`
  --margin: 0;
  --opacity: 1;
  --background: transparent;
  --background-hover: transparent;
  --background-focused: transparent;
  --background-activated: transparent;
  --box-shadow: none;
  --color: transparent;
  --border-width: 0;
  --border-style: unset;
  --border-color: transparent;
  --border-radius: 0;
  --ripple-color: transparent;

  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  height: 100%;
  width: fit-content;
  padding: 0 22px 0 0;
  margin: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='700' height='512' viewBox='0 0 700 512' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M367.297 502.974C365.351 505.761 362.762 508.037 359.749 509.608C356.736 511.179 353.387 512 349.989 512C346.591 512 343.242 511.179 340.229 509.608C337.216 508.037 334.627 505.761 332.681 502.974L3.83822 33.2432C1.61428 30.0788 0.302587 26.3642 0.0463708 22.505C-0.209846 18.6458 0.599265 14.7903 2.38536 11.3597C4.17145 7.92913 6.86586 5.05527 10.1743 3.05196C13.4828 1.04864 17.2781 -0.00709541 21.1458 5.13037e-05H678.832C682.7 -0.00709541 686.495 1.04864 689.804 3.05196C693.112 5.05527 695.807 7.92913 697.593 11.3597C699.379 14.7903 700.188 18.6458 699.932 22.505C699.675 26.3642 698.364 30.0788 696.14 33.2432L367.297 502.974Z' fill='%23353355'/%3E%3C/svg%3E%0A");
  background-position: calc(100% - 8px) center;
  background-repeat: no-repeat;
  background-size: 7px;

  &::part(native) {
    margin: 0;
    padding: 0;
  }

  svg {
    height: 24px;
    width: auto;
    object-fit: contain;
  }
`

const DTCountryCodeList = styled(IonList)`
  background-color: #fff;
`

const DTCountryCodeItem = styled(IonButton)`
  --margin: 0 !important;
  --padding-top: 14px;
  --padding-bottom: 14px;
  --padding-start: 33%;
  --padding-end: 33%;
  --opacity: 1;
  --background: transparent;
  --background-hover: transparent;
  --background-focused: transparent;
  --background-activated: transparent;
  --box-shadow: none;
  --color: var(--dt-dark);
  --border-radius: 0;
  --ripple-color: transparent;

  height: 56px;
  width: 100%;
  margin: 0;

  &:not(:first-of-type) {
    border-top: 1px solid #ddd;
  }

  &::part(native) {
    height: 56px;
    width: 100%;
    color: var(--dt-dark);
    font-size: 24px;
    font-weight: 300;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const DTInput = styled(Input)`
  height: 100%;
  width: 100%;
  padding: 0 14px;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--dt-primary);
  font-size: 24px;
  font-weight: 600;
`

const DTPhoneInput = () => {
  const [value, setValue] = useState()
  const [country, setCountry] = useState("SE")

  const phoneInput = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      phoneInput.current.focus()
    })
  }, [])

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <DTPhoneInputWrapper>
        <DTToggleModal onClick={() => setShowModal(true)}>
          <ReactCountryFlag
            countryCode={country}
            style={{
              width: "34px",
              height: "auto",
              objectFit: "contain",
            }}
            svg
          />
        </DTToggleModal>
        <Text
          size={24}
          weight={600}
          color="var(--dt-primary)"
          otherStyles="display: flex; align-items: center;"
        >
          +{getCountryCallingCode(country)}
        </Text>
        <DTInput
          value={value}
          country={country}
          onChange={setValue}
          ref={phoneInput}
          autoFocus
        />

        {/* Modal */}
        <IonModal
          isOpen={showModal}
          breakpoints={[0.85, 1]}
          initialBreakpoint={0.85}
        >
          <IonContent>
            <DTCountryCodeList>
              {getCountries().map((country) => (
                <DTCountryCodeItem
                  key={country}
                  value={country}
                  onClick={(e) => {
                    setCountry(e.target.value)
                    setShowModal(false)
                  }}
                >
                  <ReactCountryFlag
                    countryCode={country}
                    style={{
                      pointerEvents: "none",
                      width: "34px",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "2px",
                    }}
                    svg
                  />
                  {[country]} +{getCountryCallingCode(country)}
                </DTCountryCodeItem>
              ))}
            </DTCountryCodeList>
          </IonContent>
        </IonModal>
      </DTPhoneInputWrapper>
    </>
  )
}

export default DTPhoneInput
