import { Box } from "@mui/material"
import House from "./House"

const TaskInput = ({ st, setSt }) => {
  return (<Box sx={{ display: "flex", flexWrap: "wrap" }}>
    {st.map((hObj, ind) => <House key={ind} hObj={hObj} ind={ind} setSt={setSt} />)}
  </Box>)
}
export default TaskInput