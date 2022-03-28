// Ionic & React
import { useState, useEffect, useRef } from "react"
import { IonPage, IonContent, useIonRouter } from "@ionic/react"

// Redux
import { useSelector } from "react-redux"

// Plugins
import { formatPhoneNumberIntl } from "react-phone-number-input"

// Components
import Logo from "../components/Logo"
import Text from "../components/Text"
import Button from "../components/Button"
import Input from "../components/Input"
import Spinner from "../components/Spinner"

const EnterSMSCode = () => {
  const [SMSCode, setSMSCode] = useState("")
  const [border, setBorder] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)

  const router = useIonRouter()
  const { phone } = useSelector((state) => state.userSlice)

  const SMSInputRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById(SMSInputRef.current.props.id)
        .querySelector("input")
        .focus()
    })
  }, [])

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <form
            className="LandingWrapper"
            style={{ paddingTop: "10vh" }}
            onSubmit={(e) => {
              e.preventDefault()
              // if (SMSCode.length === 6) {
              router.push("/home", "forward")
              // } else {
              //   setBorder("shake")
              //   document
              //     .getElementById(SMSInputRef.current.props.id)
              //     .querySelector("input")
              //     .focus()
              // }
            }}
          >
            <Logo height={124} width={116} type="MonoDark" />

            <Text
              select="none"
              cssClass="subtitle"
              color="var(--dt-primary)"
              margin="0 auto 14px 0"
            >
              We sent a code to:
            </Text>

            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                margin: "0 auto 44px 0",
              }}
              onClick={() => router.push("/enter-phone-number", "back")}
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
              id="SMSInput"
              label="Enter the 6-digit code"
              theme="large"
              cssClass={"EnterSixDigitInput " + border}
              maxLength={6}
              value={SMSCode}
              onIonChange={handleChange}
              ref={SMSInputRef}
            />

            <Button theme="link" margin="14px 0 0 auto">
              Resend code
            </Button>

            <Spinner size={70} margin="22px 0">
              {timeLeft}
            </Spinner>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default EnterSMSCode
