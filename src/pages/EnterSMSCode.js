// Ionic & React
import { memo, useState, useEffect, useRef } from "react"
import {IonPage, IonContent, useIonRouter, useIonAlert} from "@ionic/react"

import "./Landing.css"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { setSMSCode } from "../redux/slices/userSlice"

// Plugins
import { formatPhoneNumberIntl } from "react-phone-number-input"

// Components
import Logo from "../components/Logo"
import Text from "../components/Text"
import Button from "../components/Button"
import SMSCodeInput from "../components/SMSCodeInput"
import Spinner from "../components/Spinner"
import Api from "./../helper/api";

const EnterSMSCode = () => {
  const [border, setBorder] = useState("")
  const [isCountEnd, setCountEnd] = useState(false)

  const router = useIonRouter()
  const dispatch = useDispatch()
  const [present] = useIonAlert()

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


  const api = new Api();

  const registerPhone = (phone) => {
    api
        .registerPhone({phone:phone})
        .then((response) => {
          if (response.data.success==true)
          {
            router.push("/enter-sms-code", "forward")
          }else
          {
            present({
              cssClass:"surePhoneNumber",
              message: `Invalid number`
            })
          }
        })
        .catch((err) => console.log(err));
  };

  const activatePhone = (phone,code) => {
    api
          .activatePhone({"code":code,"phone":phone})
        .then((response) => {

          if (response.data.id>0)
          {
            router.push("/materials", "forward")
          }else
          {
            present({
              cssClass:"surePhoneNumber",
              message: `Invalid Code`
            })
          }
        })
        .catch((err) => {
          present({
            cssClass:"surePhoneNumber",
            message: `Invalid Code`
          })
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const input = document
      .getElementById(SMSInputRef.current.props.id)
      .querySelector("input")

    if (input.value.length==6) {
      activatePhone(phone,input.value);
    } else if (input.value.length < 6) {
      setBorder("shake error")
      input.focus()
      return
    } else if (input.value.length > 6) {
      setBorder("shake error")
      input.focus()
    }
  }

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <form className="LandingWrapper" onSubmit={handleSubmit}>
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

            <SMSCodeInput
              border={border}
              setBorder={setBorder}
              handleSubmit={handleSubmit}
              SMSInputRef={SMSInputRef}
            />

            {isCountEnd ? (
              ""
            ) : (
              <Button  theme="link" margin="14px 0 0 auto">
                Resend code
              </Button>
            )}

            {isCountEnd ? (
              <Button
                theme="link"
                color="var(--dt-purple)"
                fontSize="18px"
                fontWeight="500"
                onClick={() => {
                  registerPhone(phone)
                }}
                margin="50px auto 0"
              >
                Resend code
              </Button>
            ) : (
              <Spinner
                size={70}
                margin="22px 0"
                count={60}
                onCountEnd={() => setCountEnd(true)}
              />
            )}
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default memo(EnterSMSCode)
