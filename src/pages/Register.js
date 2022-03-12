import "./Register.css"

import { IonContent, isPlatform } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

const Register = () => {
  return (
    <IonContent className="Register">
      <div className="RegisterWrapper">
        <Logo type="LogoVertical" />

        <div className="RegisterWith">
          <Button
            theme="rounded"
            color="#3b5998"
            text="Facebook"
            textColor="#ffffff"
            activeColor="#ffffff"
            icon="facebook"
            iconSize={24}
            iconFill="#ffffff"
          />
          {isPlatform("ios") ? (
            <Button
              theme="rounded"
              color="#ffffff"
              textColor="var(--ion-color-step-100)"
              activeColor="#ffffff"
              icon="apple"
              iconFill="#000"
              iconHeight={22}
              iconWidth={18}
              text="Sign in with Apple"
              className="RegisterApple"
            />
          ) : (
            <Button
              theme="rounded"
              color="#ffffff"
              textColor="var(--ion-color-step-100)"
              activeColor="#ffffff"
              icon="google"
              iconSize={22}
              text="Google"
            />
          )}
        </div>
        <div className="orRegisterWith body-2">or</div>

        <form className="RegisterForm">
          <Input
            className="RegisterInput rounded"
            icon="user"
            placeholder="Username"
            autocomplete="off"
          />
          <Input
            className="RegisterInput rounded"
            icon="envelope"
            type="email"
            placeholder="Email Address"
            autocomplete="off"
          />
          <Input
            className="RegisterInput rounded"
            icon="lock"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />

          <div className="haveAnAccount body">
            Already have an account?
            <Button
              theme="link"
              text="Log in"
              textColor="var(--dt-pink)"
              routerLink="/login"
            />
            .
          </div>

          <Button
            type="submit"
            theme="rounded"
            color="var(--dt-pink)"
            activeColor="var(--dt-pink-3)"
            textColor="#ffffff"
            activeText="#ffffff"
            className="RegisterButton ion-text-uppercase"
            text="Sign Up"
          />
        </form>
      </div>

      <Button theme="link" routerLink="/materials" text="Materials" />
    </IonContent>
  )
}

export default Register
