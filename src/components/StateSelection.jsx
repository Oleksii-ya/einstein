import { ButtonGroup, Button } from "@mui/material"
import { StChoiceContext } from "../App"
import { useContext } from "react"

const StateSelection = () => {
  const stChoice = useContext(StChoiceContext)
  const isDisabled = stChoice.stArr.length === 0
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="Disabled elevation buttons"
    >
      <Button disabled={isDisabled} sx={{ bgcolor: "#85d9b0" }}>Prev</Button>
      <Button disabled={isDisabled} sx={{ bgcolor: "#85d9b0" }}>Next</Button>
    </ButtonGroup>
  )
}
export default StateSelection