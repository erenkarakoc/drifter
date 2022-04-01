// Ionic & React
import { memo, useState, useEffect, useRef } from "react"
import {
  IonPage,
  IonContent,
  useIonRouter,
  useIonAlert,
  useIonLoading,
} from "@ionic/react"

import "./Landing.css"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { setSMSCode } from "../redux/slices/userSlice"

// Plugins
import {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input"

// Components
import Logo from "../components/Logo"
import Text from "../components/Text"
import Button from "../components/Button"
import Input from "../components/Input"
import Spinner from "../components/Spinner"
import Api from "./../helper/api"

const EnterSMSCode = () => {
  const [border, setBorder] = useState("")
  const [count, setCount] = useState(60)
  const [isCountEnd, setIsCountEnd] = useState(false)
  const [reset, resetTimer] = useState(false)

  const router = useIonRouter()
  const dispatch = useDispatch()
  const [present] = useIonAlert()
  const [loading] = useIonLoading()

  const { phone, SMSCode } = useSelector((state) => state.userSlice)

  const SMSInputRef = useRef(null)
  useEffect(() => {
    let isMounted = true

    setTimeout(() => {
      if (isMounted)
        document
          .getElementById(SMSInputRef.current.props.id)
          .querySelector("input")
          .focus()
    })
  })

  const inputError = () => {
    setBorder("")
    setBorder("shake")
    setTimeout(() => {
      document
        .getElementById(SMSInputRef.current.props.id)
        .querySelector("input")
        .focus()
    })
  }

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
      .catch(() => {
        present({
          cssClass: "surePhoneNumber",
          message: `Invalid phone number`,
        })
      })
  }

  const activatePhone = (phone, code) => {
    api
      .activatePhone({ code: code, phone: phone })
      .then((response) => {
        if (response.data.id > 0) {
          setIsCountEnd(false)
          router.push("/materials", "forward")
        } else {
          present({
            cssClass: "surePhoneNumber",
            message: `Invalid SMS code`,
          })
        }
      })
      .catch(() => {
        inputError()
      })
  }

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "")

    setBorder("")
    if (e.target.value.length === 6) handleSubmit(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const input = document
      .getElementById(SMSInputRef.current.props.id)
      .querySelector("input")

    if (input.value.length == 6) {
      activatePhone(phone, input.value)
    } else {
      inputError()
      return
    }
  }

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <form className="LandingWrapper" onSubmit={handleSubmit}>
            <Logo height={124} width={116} type="MonoDark" />

            {phone && isValidPhoneNumber(phone) ? (
              <>
                <Text
                  select="none"
                  cssClass="subtitle"
                  color="var(--dt-primary)"
                  margin="0 auto 14px 0"
                >
                  We sent a code to:
                </Text>

                <div
                  className="EditPhoneNumberForSMS"
                  onClick={() => {
                    dispatch(setSMSCode(""))
                    router.push("/enter-phone-number", "back")
                  }}
                >
                  <Text select="none" cssClass="title" margin="0 16px 0 0">
                    <h2>{formatPhoneNumberIntl(phone)}</h2>
                  </Text>
                  <Button
                    style={{ pointerEvents: "none" }}
                    theme="link"
                    color="var(--dt-purple)"
                    fontSize="16px"
                    fontWeight="500"
                    icon="edit"
                    iconColor="var(--dt-purple)"
                    iconLeft
                  >
                    <span>Edit</span>
                  </Button>
                </div>

                <Input
                  id="SMSCodeInput"
                  label="Enter the 6-digit code"
                  labelMode="first"
                  theme="large"
                  cssClass={`EnterSixDigitInput ${border ? border : ""}`}
                  value={SMSCode}
                  onIonChange={handleChange}
                  onIonFocus={() => setBorder("")}
                  inputmode="numeric"
                  maxLength={6}
                  ref={SMSInputRef}
                />

                <Button
                  cssClass={`ResendSMSCodeButton ${
                    isCountEnd ? "count-ended" : ""
                  }`}
                  theme="link"
                  margin="14px 0 0 auto"
                  onClick={() => {
                    loading("Sending...", 800)
                    resetTimer(true)
                    registerPhone(phone)
                  }}
                >
                  Resend code
                </Button>

                <Spinner
                  size={70}
                  count={count}
                  setCount={setCount}
                  setIsCountEnd={setIsCountEnd}
                  reset={reset}
                  resetTimer={resetTimer}
                  margin="22px 0 0"
                />
              </>
            ) : (
              <>
                <Text
                  select="none"
                  cssClass="title"
                  color="var(--dt-primary)"
                  aling="center"
                  margin="0 auto 0"
                >
                  Please provide a valid phone number first.
                </Text>
                <Button
                  theme="link"
                  routerLink="/enter-phone-number"
                  routerDirection="back"
                  margin="26px auto 0 0"
                >
                  Back
                </Button>
              </>
            )}
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default memo(EnterSMSCode)
