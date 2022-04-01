// Ionic & React
import { memo, useState } from "react"
import { IonPage, IonContent, useIonRouter, useIonAlert } from "@ionic/react"

import "./Landing.css"

// Redux
import { useSelector } from "react-redux"

// Plugins
import {
  isValidPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input"

// Components
import Logo from "./../components/Logo"
import Text from "../components/Text"
import DTPhoneInput from "../components/DTPhoneInput"
import Button from "../components/Button"
import Api from "./../helper/api"

const EnterPhoneNumber = () => {
  const [border, setBorder] = useState("")

  const router = useIonRouter()
  const [present] = useIonAlert()

  let { phone } = useSelector((state) => state.userSlice)

  const api = new Api()
  const registerPhone = (phone) => {
    api
      .registerPhone({ phone: phone })
      .then((response) => {
        if (response.data.success == true) {
          router.push("/enter-sms-code", "forward")
        } else {
          present({
            cssClass: "surePhoneNumber",
            message: `Invalid phone number`,
          })
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <form
            className="LandingWrapper"
            onSubmit={(e) => {
              e.preventDefault()

              if (isValidPhoneNumber(phone)) {
                present({
                  cssClass: "surePhoneNumber",
                  message: `Are you sure you typed your number correctly?\n\n<span>${formatPhoneNumberIntl(
                    phone
                  )}</span>`,
                  buttons: [
                    "No",
                    {
                      text: "Yes",
                      handler: (d) => registerPhone(phone),
                    },
                  ],
                })
              } else {
                setBorder("")
                setTimeout(() => setBorder("shake"))
              }
            }}
          >
            <Logo height={124} width={116} type="MonoDark" />

            <Text select="none" cssClass="title-2" margin="0 0 40px">
              Enter your mobile phone for registration:
            </Text>

            <DTPhoneInput border={border} setBorder={setBorder} />

            <Button type="submit" theme="primary" margin="56px 0 0">
              Proceed
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default memo(EnterPhoneNumber)
