import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Task = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "tomato", fontSize: 20 }}>Умова задачі</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            На одній вулиці розташовано 5 будинків різного кольору (синього, білого, жовтого, зеленого і червоного).
            В цих будинках живе 5 людей різних національностей (швед, данець, англієць, німець та норвежець),
            які п'ють 5 різних видів напоїв (пиво, кава, чай, вода, молоко),
            курять 5 різних марок цигарок (Dunhill, Marlboro, Rothmans, Pall Mall та Phillip Morris)
            та розводять 5 різних тваринок (коні, птахи, рибки, коти та собаки).
          </Typography>
          <Typography sx={{ fontWeight: 800 }}>
            Запитання: хто розводить рибок?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default Task