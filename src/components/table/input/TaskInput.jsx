import { Box } from "@mui/material"
import House from "./House"

const TaskInput = ({ st, setSt, mkCh }) => {
  return (<Box sx={{ display: "flex", flexWrap: "wrap" }}>
    {st.map((hObj, ind) => <House key={ind} hObj={hObj} ind={ind} setSt={setSt} mkCh={mkCh} />)}
  </Box>)
}
export default TaskInput