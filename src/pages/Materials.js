// React & Ionic
import { useState } from "react"
import { IonContent, useIonAlert } from "@ionic/react"

//======================
//=========== Materials
//======================

import "./Materials.css"

// COMPONENTS
import TestModal from "../components/TestModal"
import Icon from "../components/Icon"
import Button from "../components/Button"
import Input from "../components/Input"
import Logo from "../components/Logo"

const Materials = () => {
  const handleButtonClick = (e) => {
    alert(e.target.innerText)
  }

  // Modal
  const [isTestModalOpen, setTestModalOpen] = useState(false)

  // IonAlert
  const [present] = useIonAlert()

  return (
    <IonContent scrollEvents={true}>
      <div className="Materials">
        <h1>Pages</h1>

        <div>
          <Button routerLink="/" theme="link" text="App" />
          <Button routerLink="/Home" theme="link" text="Home" />
          <Button routerLink="/login" theme="link" text="Login" />
          <Button routerLink="/register" theme="link" text="Register" />
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
          <h1 className="title">Title 1</h1>
          <h2 className="title-2">Title 2</h2>
          <h3 className="subtitle">Subtitle</h3>
          <h4 className="subtitle-2">Subtitle 2</h4>
          <p className="body">
            <u>Body:</u> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magni, quas.
          </p>
          <p className="body-2">
            <u>Body 2:</u> Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Incidunt, amet.
          </p>
          <p className="caption">
            <u>Caption:</u> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis, aspernatur!
          </p>
        </div>

        <h1>Icons</h1>

        <div className="MaterialsIcons">
          <Icon name="phone" fill="#ffffff" size={35} />
          <Icon name="user" fill="#ffffff" size={35} />
          <Icon name="envelope" fill="#ffffff" height={35} width={40} />
          <Icon name="lock" fill="#ffffff" size={35} />
        </div>

        <h1>Buttons</h1>

        <div className="MaterialsButtons">
          <Button
            text="Button primary"
            onClick={handleButtonClick}
            className="ion-margin-top"
            test-attribute="working"
          />
          <Button
            theme="rounded"
            color={"var(--dt-pink)"}
            activeColor={"var(--dt-pink-3)"}
            activeText={"#fff"}
            text="Button rounded"
            className="ion-margin-top"
            onClick={() => {
              setTestModalOpen(true)
            }}
          />
          <Button
            theme="rounded"
            text="Button rounded & ghosted"
            color="transparent"
            activeColor="#fff"
            activeText="#1f1f1f"
            borderColor="#fff"
            className="ion-margin-top"
            onClick={() => {
              setTestModalOpen(true)
            }}
          />
          <Button
            theme="text"
            text="Text button"
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
          />
        </div>

        <h1>Inputs</h1>

        <div className="MaterialsInputs">
          <Input placeholder="Input"></Input>
          <Input
            className="ion-margin-top icon-left"
            borderColor="var(--dt-blue)"
            placeholder="Input Secondary"
            icon="google"
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
          ></Input>
        </div>
      </div>

      <TestModal isOpen={isTestModalOpen} setTestModalOpen={setTestModalOpen} />
    </IonContent>
  )
}

export default Materials
