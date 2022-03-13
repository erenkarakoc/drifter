import "./Register.css"

import { IonPage, IonContent, isPlatform } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

const Register = () => {
  return (
    <IonPage>
      <IonContent className="Onboarding Register">
        <div className="OnboardingWrapper">
          <Logo type="LogoVertical" />

          <div className="RegisterWith">
            <Button
              theme="rounded"
              color="#3b5998"
              textColor="#fff"
              activeColor="#fff"
              icon="facebook"
              iconHeight={24}
              iconWidth={18}
              iconFill="#fff"
            >
              Facebook
            </Button>
            {isPlatform("ios") ? (
              <Button
                theme="rounded"
                color="#fff"
                textColor="var(--ion-color-step-100)"
                activeColor="#fff"
                icon="apple"
                iconFill="#000"
                iconHeight={22}
                iconWidth={18}
                className="RegisterApple"
              >
                Sign in with Apple
              </Button>
            ) : (
              <Button
                theme="rounded"
                color="#fff"
                textColor="var(--ion-color-step-100)"
                activeColor="#fff"
                icon="google"
                iconSize={22}
              >
                Google
              </Button>
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
                textColor="var(--dt-pink)"
                routerLink="/login"
              >
                Log in
              </Button>
              .
            </div>

            <Button
              type="submit"
              theme="rounded"
              color="var(--dt-pink)"
              activeColor="var(--dt-pink-3)"
              textColor="#fff"
              activeText="#fff"
              className="RegisterButton ion-text-uppercase"
            >
              Sign Up
            </Button>
          </form>
        </div>

        <Button theme="link" routerLink="/materials">
          Materials
        </Button>
      </IonContent>
    </IonPage>
  )
}

export default Register
