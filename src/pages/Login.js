import "./Login.css"

import { useState } from "react"
import { IonPage, IonContent, useIonToast, isPlatform } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

const Login = () => {
  const [withMail, setWithMail] = useState(true)
  const [present, dismiss] = useIonToast()

  return (
    <IonPage>
      <IonContent className="Onboarding Login">
        <div className="OnboardingWrapper">
          <Logo type="LogoVertical" />

          <form className="LoginForm">
            {withMail ? (
              <Input
                className="LoginInput rounded icon-right"
                icon="envelope"
                type="email"
                placeholder="Email Address"
                autocomplete="off"
              ></Input>
            ) : (
              <Input
                className="LoginInput rounded icon-right"
                icon="phone"
                type="phone"
                placeholder="Phone"
                autocomplete="off"
              ></Input>
            )}
            <Input
              className="LoginInput rounded icon-right"
              icon="lock"
              type="password"
              placeholder="Password"
              autocomplete="off"
            ></Input>
            <Button
              theme="rounded"
              color="var(--dt-pink)"
              hoverColor="var(--dt-pink-3)"
              activeColor="var(--dt-pink-3)"
              textColor="#fff"
              activeText="#fff"
              className="LoginButton ion-text-uppercase"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                present({
                  buttons: [{ text: "Hide Toast", handler: () => dismiss() }],
                  message: "Drifter is on development.",
                  duration: 2000,
                })
              }}
            >
              Login
            </Button>
            <Button
              type="button"
              theme="link"
              color="var(--dt-primary-500)"
              hoverColor="var(--dt-primary-300)"
              textColor="var(--dt-primary-500)"
              className="LoginForgotPassword"
              routerLink="/forgot-password"
            >
              Forgot Password?
            </Button>
          </form>

          <div className="orLoginWith caption">or login with</div>

          <div className="LoginWith">
            {isPlatform("ios") ? (
              <Button
                theme="fab"
                color="#fff"
                activeColor="#fff"
                hoverColor="#fff"
                icon="apple"
                iconFill="#000"
                iconHeight={22}
                iconWidth={18}
              />
            ) : (
              <Button
                theme="fab"
                color="#fff"
                activeColor="#fff"
                hoverColor="#fff"
                icon="google"
                iconSize={22}
              />
            )}
            <Button
              theme="fab"
              color="#fff"
              activeColor="#fff"
              hoverColor="#fff"
              icon="facebook"
              iconHeight={24}
              iconWidth={18}
              iconFill="#3b5998"
            />
            {withMail ? (
              <Button
                theme="fab"
                color="#fff"
                activeColor="#fff"
                hoverColor="#fff"
                icon="phone-filled"
                iconFill="#b12083"
                iconSize={22}
                onClick={() => {
                  setWithMail(false)
                }}
              />
            ) : (
              <Button
                theme="fab"
                color="#fff"
                activeColor="#fff"
                hoverColor="#fff"
                icon="envelope-filled"
                iconFill="#b12083"
                iconSize={22}
                onClick={() => {
                  setWithMail(true)
                }}
              />
            )}
          </div>

          <div className="RegisterNow caption">
            Don't have an account?
            <Button
              theme="link"
              textColor="var(--dt-primary-500)"
              hoverColor="var(--dt-primary-300)"
              className="LoginForgotPassword"
              routerLink="/register"
            >
              Register now
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
