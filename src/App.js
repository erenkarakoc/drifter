// React & Ionic
import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"

// Pages
import Materials from "./pages/Materials"
import Landing from "./pages/Landing"
import EnterPhoneNumber from "./pages/EnterPhoneNumber"
import EnterSMSCode from "./pages/EnterSMSCode"

import Home from "./pages/Home"

// Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css"

// Basic CSS for apps built with Ionic
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"

// Optional CSS utils that can be commented out
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

// Drifter Theme
import "./assets/theme/variables.css"
import "./assets/theme/Typography.css"
import "./assets/theme/Theme.css"

//========================
//=========== Drifter App
//========================

setupIonicReact()
const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
          <Route exact path="/materials">
            <Materials />
          </Route>

          {/* Onboarding */}
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/enter-phone-number">
            <EnterPhoneNumber />
          </Route>
          <Route exact path="/enter-sms-code">
            <EnterSMSCode />
          </Route>

          {/* Home */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* Not Found */}
          <Route>
            <Redirect to="/" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
