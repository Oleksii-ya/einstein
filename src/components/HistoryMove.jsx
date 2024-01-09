import { ButtonGroup, Button } from "@mui/material"

const HistoryMove = ({ curPos, totalCh, goBack, goForward }) => {

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="Disabled elevation buttons"
    >
      <Button
        disabled={curPos === -1}
        sx={{ bgcolor: "#85d9b0" }}
        onClick={() => { goBack() }}
      >Prev</Button>
      <Button
        disabled={curPos + 1 === totalCh}
        sx={{ bgcolor: "#85d9b0" }}
        onClick={() => { goForward() }}
      >Next</Button>
    </ButtonGroup>
  )
}
export default HistoryMove