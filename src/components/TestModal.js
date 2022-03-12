import { IonModal, IonButton, IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"
import styled from "styled-components"

const ModalWrapper = styled(IonModal)`
  & > div {
    padding: 40px;
  }
`

const TestModal = ({ isOpen, setTestModalOpen }) => {
  return (
    <ModalWrapper cssClass="TestModal" swipeToClose={true} isOpen={isOpen}>
      Test modal content.
      <IonButton onClick={() => setTestModalOpen(false)}>
        <IonIcon icon={close} />
      </IonButton>
    </ModalWrapper>
  )
}

export default TestModal
