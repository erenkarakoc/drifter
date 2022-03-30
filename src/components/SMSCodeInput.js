// Ionic & React
import { memo } from "react"

// Redux
import { useSelector } from "react-redux"

// Components
import Input from "./Input"

const SMSCodeInput = ({ border, handleChange, SMSInputRef, ...props }) => {
  const { SMSCode } = useSelector((state) => state.userSlice)

  return (
    <Input
      id="SMSCodeInput"
      label="Enter the 6-digit code"
      theme="large"
      cssClass={"EnterSixDigitInput " + border}
      onIonChange={handleChange}
      value={SMSCode}
      inputmode="numeric"
      maxLength={6}
      ref={SMSInputRef}
      {...props}
    />
  )
}

export default memo(SMSCodeInput)
