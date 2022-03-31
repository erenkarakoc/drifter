// Ionic & React
import { memo } from "react"

// Redux
import { useSelector } from "react-redux"

// Components
import Input from "./Input"

const SMSCodeInput = ({
  border,
  setBorder,
  handleSubmit,
  SMSInputRef,
  ...props
}) => {
  const { SMSCode } = useSelector((state) => state.userSlice)

  const handleChange = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1")

    setBorder("")
    if (e.target.value.length === 6) handleSubmit(e)
  }

  return (
    <Input
      id="SMSCodeInput"
      label="Enter the 6-digit code"
      theme="large"
      cssClass={`EnterSixDigitInput ${border ? border : ""}`}
      onIonChange={handleChange}
      onIonFocus={() => setBorder("")}
      value={SMSCode}
      inputmode="numeric"
      maxLength={6}
      ref={SMSInputRef}
      {...props}
    />
  )
}

export default memo(SMSCodeInput)
