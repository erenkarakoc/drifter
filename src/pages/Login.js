import "./Login.css"

import { IonContent, IonFab, IonFabButton, useIonRouter } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

const Login = () => {
  const router = useIonRouter()

  return (
    <IonContent className="Login">
      <div className="LoginWrapper">
        <Logo type="LogoVertical" />

        <form className="LoginForm">
          <Input
            className="LoginInput rounded icon-right"
            icon="envelope"
            type="email"
            placeholder="Email Address"
            autocomplete="off"
          ></Input>
          <Input
            className="LoginInput rounded icon-right"
            icon="lock"
            type="password"
            placeholder="Password"
            autocomplete="off"
          ></Input>
          <Button
            type="submit"
            theme="rounded"
            color="var(--dt-pink)"
            activeColor="var(--dt-pink-3)"
            activeText="#ffffff"
            className="LoginButton ion-text-uppercase"
            text="Login"
          />
          <Button
            type="submit"
            theme="link"
            color="var(--dt-primary-500)"
            hoverColor="var(--dt-primary-300)"
            className="LoginForgotPassword"
            text="Forgot Password?"
          />
        </form>

        <span className="orLoginWith caption">or login with</span>

        <div className="LoginWith">
          <Button theme="fab" color="#ffffff" icon="phone-outlined" />
        </div>
      </div>
    </IonContent>
  )
}

export default Login
