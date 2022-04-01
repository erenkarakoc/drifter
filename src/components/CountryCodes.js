// Ionic & React
import { useEffect, useState } from "react"
import { IonButton, IonList } from "@ionic/react"

// Plugins
import styled from "styled-components"
import { getCountryCallingCode, getCountries } from "react-phone-number-input"
import countryNames from "react-phone-number-input/locale/en.json"
import ReactCountryFlag from "react-country-flag"
import ContentLoader from "react-content-loader"

const DTCountryCodeList = styled(IonList)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

const DTCountryCodeItem = styled(IonButton)`
  --margin: 0 !important;
  --padding-top: 14px;
  --padding-start: 0;
  --padding-end: 0;
  --padding-bottom: 14px;
  --opacity: 1;
  --background: transparent;
  --background-hover: transparent;
  --background-focused: transparent;
  --background-activated: transparent;
  --box-shadow: none;
  --color: #1f1f1f;
  --border-radius: 0;
  --ripple-color: transparent;

  min-height: 56px;
  height: unset;
  width: 100%;
  margin: 0;
  letter-spacing: 0;
  text-transform: unset;

  &:not(:first-of-type) {
    border-top: 1px solid #ddd;
  }

  &::part(native) {
    display: flex;
    align-items: center;
    min-height: 56px;
    max-width: 100%;
    height: unset;
    margin: 0;
    padding: 0 40px;
    font-size: 18px;
    font-weight: 600;
    white-space: break-spaces;
    transition: all 0.15s ease-out;
  }
  &:not([isSkeleton="true"])::part(native):active {
    transform: scale(0.98);
  }

  &[aria-current="true"] {
    background-image: url("data:image/svg+xml,%3Csvg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 85C0 38.0558 38.0558 0 85 0H427C473.944 0 512 38.0558 512 85V427C512 473.944 473.944 512 427 512H85C38.0558 512 0 473.944 0 427V85Z' fill='%236561A1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M393.167 161.833C399.611 168.276 399.611 178.724 393.167 185.167L228.167 350.167C221.724 356.611 211.276 356.611 204.833 350.167L138.833 284.167C132.389 277.724 132.389 267.276 138.833 260.833C145.276 254.389 155.724 254.389 162.167 260.833L216.5 315.165L369.833 161.833C376.276 155.389 386.724 155.389 393.167 161.833Z' fill='white'/%3E%3C/svg%3E%0A");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) center;
  }

  span {
    display: inline;
    line-height: 1.3;

    & > span {
      display: inline;
      margin-left: 8px;
      font-weight: 500;
    }
  }

  img,
  svg,
  & > span {
    animation: fadeIn 0.2s ease-out forwards;
  }
`

const CountryCodes = ({ currentCountry, handleClick }) => {
  const [countries, setCountries] = useState([])

  const CountryCodesSkeleton = (props) => (
    <DTCountryCodeItem onClick={false} isSkeleton={true}>
      <ContentLoader
        speed={1}
        height={30}
        viewBox="0 0 300 30"
        backgroundColor="#f6f6f3"
        foregroundColor="#e3e3e3"
        preserveAspectRatio="none"
        style={{ maxWidth: "460px", width: "100%", marginRight: "auto" }}
        {...props}
      >
        <rect x="0" y="0" rx="3" ry="3" width="40" height="30" />
        <rect x="52" y="8" rx="7" ry="7" width="248" height="14" />
      </ContentLoader>
    </DTCountryCodeItem>
  )

  useEffect(() => {
    const timer = setTimeout(setCountries, 100, getCountries())
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return countries.length === 0 ? (
    <div
      style={{ maxHeight: "100%", height: "fit-content", overflow: "hidden" }}
    >
      {Array(10).fill(<CountryCodesSkeleton />)}
    </div>
  ) : (
    <DTCountryCodeList>
      {countries.map((country) => (
        <DTCountryCodeItem
          key={country}
          value={country}
          onClick={handleClick}
          ariaCurrent={country === currentCountry ? true : false}
        >
          <ReactCountryFlag
            countryCode={country}
            style={{
              pointerEvents: "none",
              width: "40px",
              height: "auto",
              marginRight: "12px",
              objectFit: "contain",
              borderRadius: "3px",
            }}
            svg
          />
          <span
            style={{
              pointerEvents: "none",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            {countryNames[country]}
            <span>+{getCountryCallingCode(country)}</span>
          </span>
        </DTCountryCodeItem>
      ))}
    </DTCountryCodeList>
  )
}

export default CountryCodes
