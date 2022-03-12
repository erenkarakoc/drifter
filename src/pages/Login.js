import "./Login.css"

import { useState } from "react"
import { IonContent, useIonRouter, isPlatform } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

const Login = () => {
  const [withMail, setWithMail] = useState(true)

  return (
    <IonContent className="Login">
      <div className="LoginWrapper">
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
            type="submit"
            theme="rounded"
            color="var(--dt-pink)"
            hoverColor="var(--dt-pink-3)"
            activeColor="var(--dt-pink-3)"
            textColor="#ffffff"
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

        <div className="orLoginWith caption">or login with</div>

        <div className="LoginWith">
          {isPlatform("ios") ? (
            <Button
              theme="fab"
              color="#ffffff"
              activeColor="#ffffff"
              hoverColor="#ffffff"
              icon="apple"
              iconFill="#000"
              iconHeight={22}
              iconWidth={17}
            />
          ) : (
            <Button
              theme="fab"
              color="#ffffff"
              activeColor="#ffffff"
              hoverColor="#ffffff"
              icon="google"
              iconSize={22}
            />
          )}
          <Button
            theme="fab"
            color="#ffffff"
            activeColor="#ffffff"
            hoverColor="#ffffff"
            icon="facebook"
            iconSize={24}
            iconFill="#3b5998"
          />
          {withMail ? (
            <Button
              theme="fab"
              color="#ffffff"
              activeColor="#ffffff"
              hoverColor="#ffffff"
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
              color="#ffffff"
              activeColor="#ffffff"
              hoverColor="#ffffff"
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
            text="Register now"
            routerLink="/register"
          />
        </div>
      </div>
    </IonContent>
  )
}

export default Login
