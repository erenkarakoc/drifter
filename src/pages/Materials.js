// React & Ionic
import { useState } from "react"
import { IonPage, IonContent, useIonAlert } from "@ionic/react"

//======================
//=========== Materials
//======================

import "./Materials.css"

// COMPONENTS
import Logo from "../components/Logo"
import Button from "../components/Button"
import Input from "../components/Input"
import Text from "../components/Text"
import Icon from "../components/Icon"
import TestModal from "../components/TestModal"

const Materials = () => {
  const handleButtonClick = (e) => {
    alert(e.target.innerText)
  }

  // Modal
  const [isTestModalOpen, setTestModalOpen] = useState(false)

  // IonAlert
  const [present] = useIonAlert()

  return (
    <IonPage>
      <IonContent scrollEvents={true}>
        <div className="Materials">
          <div className="MaterialsWrap">
            <h1>Pages</h1>

            <div className="MaterialsPages">
              <Button routerLink="/login" routerAnimation="slide" theme="link">
                Login
              </Button>
              <Button routerLink="/register" theme="link">
                Register
              </Button>
              <Button routerLink="/forgot-password" theme="link">
                Forgot Password
              </Button>
              <Button routerLink="/registration" theme="link">
                Registration
              </Button>
            </div>

            <h1>Logos</h1>

            <div className="MaterialsLogos">
              <p>Vertical</p>
              <div>
                <Logo type="LogoVertical" />
                <Logo type="LogoVerticalDark" />
                <Logo type="LogoVerticalGradient" />
              </div>
              <p>Horizontal</p>
              <div>
                <Logo />
                <Logo type="LogoDark" />
              </div>
              <div>
                <Logo type="LogoGradient" />
                <Logo type="LogoGradient2" />
              </div>
              <p>Monotype</p>
              <div>
                <Logo type="Mono" />
                <Logo type="MonoDark" />
                <Logo type="MonoGradient" />
              </div>
              <p>Logotype</p>
              <div>
                <Logo type="Logotype" />
                <Logo type="LogotypeDark" />
              </div>
            </div>

            <h1>Typography</h1>

            <div className="MaterialsTypography">
              <Text color="white" size={32} weight={600}>
                <h1>Title</h1>
              </Text>
              <Text color="white" size="24px" weight={600}>
                <h2>Title 2</h2>
              </Text>
              <Text color="white" size={16} weight={600}>
                <h2>Subtitle</h2>
              </Text>
              <Text color="white" size={14} weight={600}>
                <h2>Subtitle 2</h2>
              </Text>
              <Text color="white" size={16} weight={400}>
                <p>
                  <u>Body:</u> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Magni, quas.
                </p>
              </Text>
              <Text color="white" size={14} weight={400}>
                <p>
                  <u>Body 2:</u> Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Incidunt, amet.
                </p>
              </Text>
              <Text color="white" size={12} weight={400}>
                <p>
                  <u>Caption:</u> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Reiciendis, aspernatur!
                </p>
              </Text>
            </div>

            <h1>Icons</h1>

            <div className="MaterialsIcons">
              <Icon name="phone" fill="#fff" size={35} />
              <Icon name="user" fill="#fff" size={35} />
              <Icon name="envelope" fill="#fff" size={35} />
              <Icon name="lock" fill="#fff" size={35} />
              <Icon name="phone-filled" fill="#fff" size={35} />
              <Icon name="envelope-filled" fill="#fff" size={35} />
              <Icon name="google" fill="#fff" size={35} />
              <Icon name="apple" fill="#fff" size={35} />
              <Icon name="facebook" fill="#fff" size={35} />
              <Icon name="reg-private" fill="#fff" size={35} />
              <Icon name="reg-company" fill="#fff" size={35} />
              <Icon name="reg-user" fill="#fff" size={35} />
              <Icon name="reg-rental" fill="#fff" height={35} width={72} />
              <Icon name="reg-camera" fill="#fff" size={35} />
              <Icon name="reg-photo" fill="#fff" size={35} />
              <Icon name="car-w-cable" fill="#fff" size={35} />
            </div>

            <h1>Buttons</h1>

            <div className="MaterialsButtons">
              <Button
                textColor="#fff"
                onClick={handleButtonClick}
                className="ion-margin-top"
                test-attribute="working"
              >
                Button primary
              </Button>
              <Button
                theme="rounded"
                color={"var(--dt-pink)"}
                activeColor={"var(--dt-pink-3)"}
                textColor="#fff"
                activeText={"#fff"}
                className="ion-margin-top"
                onClick={() => {
                  setTestModalOpen(true)
                }}
              >
                Button rounded
              </Button>
              <Button
                theme="rounded"
                color="transparent"
                textColor="#fff"
                activeText="#1f1f1f"
                activeColor="#fff"
                borderColor="#fff"
                className="ion-margin-top"
                onClick={() => {
                  setTestModalOpen(true)
                }}
              >
                Button rounded & ghosted
              </Button>
              <Button
                theme="text"
                textColor="#fff"
                activeColor="rgba(140, 206, 228, 0.16)"
                className="ion-margin-top ion-text-uppercase"
                onClick={() =>
                  present({
                    cssClass: "DTAlert",
                    header: "Alert",
                    message: "Are you sure to show alert?",
                    buttons: [
                      "Cancel",
                      { text: "Yes", handler: (d) => console.log("Accepted") },
                    ],
                    onDidDismiss: (e) => console.log("Dismissed"),
                  })
                }
              >
                Text button
              </Button>
              <Button
                type="button"
                theme="link"
                color="var(--dt-primary-500)"
                hoverColor="var(--dt-primary-300)"
                textColor="var(--dt-primary-500)"
                className="ion-margin-top"
              >
                Back
              </Button>
            </div>

            <h1>Inputs</h1>

            <div className="MaterialsInputs">
              <Input placeholder="Input"></Input>
              <Input
                className="ion-margin-top icon-left"
                borderColor="var(--dt-blue)"
                placeholder="Input Secondary"
                icon="google"
                iconSize={22}
              ></Input>
              <Input
                className="rounded ion-margin-top"
                placeholder="Input Rounded"
              ></Input>
              <Input
                className="rounded ion-margin-top"
                placeholder="Input with Icon"
                type="phone"
                icon="phone"
                iconSize={24}
              ></Input>
            </div>
          </div>
        </div>

        <TestModal
          isOpen={isTestModalOpen}
          setTestModalOpen={setTestModalOpen}
        />
      </IonContent>
    </IonPage>
  )
}

export default Materials
