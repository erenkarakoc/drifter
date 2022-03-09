import { useState } from "react"
import { IonModal, IonContent, IonButton } from "@ionic/react"
import "./Emrullah.css"

interface ContainerProps {}

const Emrullah: React.FC<ContainerProps> = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>
        Emrullah Modalını Aç
      </IonButton>
        
      <IonModal isOpen={showModal}>
        <IonContent>
          Emrullah Modal
          <IonButton onClick={() => setShowModal(false)}>
            Emrullah Modalını Kapat
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  )
}

export default Emrullah
