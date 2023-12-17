import { Typography, Card, CardContent } from '@mui/material';

import SetAttr from './SetAttr';

const House = ({ hObj, ind, setSt }) => {
  return (
    <Card sx={{ minWidth: 200, margin: "8px" }} variant="outlined">
      <CardContent>
        <Typography textAlign={"center"}> {ind + 1} </Typography>
        <SetAttr hObj={hObj} setSt={setSt} index={ind} />
      </CardContent>
    </Card>
  )
}
export default House