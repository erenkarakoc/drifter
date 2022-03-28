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
              <Button routerLink="/landing" theme="link">
                Landing
              </Button>
              <Button routerLink="/enter-phone-number" theme="link">
                Enter Phone Number
              </Button>
              <Button routerLink="/enter-sms-code" theme="link">
                Enter SMS Code
              </Button>
            </div>

            <h1>Logos</h1>

            <div className="MaterialsLogos">
              <p>Vertical</p>
              <div>
                <Logo type="LogoVertical" />
                <Logo type="LogoVerticalDark" id="splashLogo" />
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
              <Text color="black" size={32} weight={600}>
                <h1>Title</h1>
              </Text>
              <Text color="black" size="24px" weight={600}>
                <h2>Title 2</h2>
              </Text>
              <Text color="black" size={16} weight={600}>
                <h2>Subtitle</h2>
              </Text>
              <Text color="black" size={14} weight={600}>
                <h2>Subtitle 2</h2>
              </Text>
              <Text color="black" size={16} weight={400}>
                <p>
                  <u>Body:</u> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Magni, quas.
                </p>
              </Text>
              <Text color="black" size={14} weight={400}>
                <p>
                  <u>Body 2:</u> Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Incidunt, amet.
                </p>
              </Text>
              <Text color="black" size={12} weight={400}>
                <p>
                  <u>Caption:</u> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Reiciendis, aspernatur!
                </p>
              </Text>
            </div>

            <h1>Icons</h1>

            <div className="MaterialsIcons">
              <Icon name="map-pin" fill="#b12083" size={35} />
              <Icon name="map-and-pin" fill="#000" size={35} />
              <Icon name="view" fill="#000" size={35} />
              <Icon name="chademo" fill="#000" size={35} />
              <Icon name="type-2" fill="#000" size={35} />
              <Icon name="css-combo" fill="#000" size={35} />
              <Icon name="type-1" fill="#000" size={35} />
              <Icon name="google" fill="#000" size={35} />
              <Icon name="apple" fill="#000" size={35} />
              <Icon name="facebook" fill="#000" size={35} />
              <Icon name="arrow-right" fill="#000" size={35} />
            </div>

            <h1>Colors</h1>

            <div className="MaterialsColors">
              <span style={{ background: "var(--dt-primary)" }} />
              <span style={{ background: "var(--dt-pink)" }} />
              <span style={{ background: "var(--dt-purple)" }} />
              <span style={{ background: "var(--dt-purple-2)" }} />
              <span style={{ background: "var(--dt-purple-3)" }} />
            </div>

            <h1>Buttons</h1>

            <div className="MaterialsButtons">
              <Button onClick={handleButtonClick} className="ion-margin-top">
                Button primary
              </Button>
              <Button
                theme="rounded"
                className="ion-margin-top"
                onClick={() => {
                  setTestModalOpen(true)
                }}
              >
                Button rounded
              </Button>
              <Button
                theme="rounded"
                className="ion-margin-top"
                onClick={() => {
                  setTestModalOpen(true)
                }}
              >
                Button rounded & ghosted
              </Button>
              <Button
                theme="text"
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
              <Button type="button" theme="link" className="ion-margin-top">
                Back
              </Button>
            </div>

            <h1>Inputs</h1>

            <div className="MaterialsInputs">
              <Input placeholder="Input"></Input>
              <Input
                className="ion-margin-top icon-left"
                border="var(--dt-blue)"
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
