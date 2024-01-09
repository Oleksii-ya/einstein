import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { attrs } from '../data';

const SetAttr = ({ hObj, setSt, index, mkCh }) => {
  const handleChange = (event, type) => {
    setSt((prev) => {
      const atr = event.target.value
      const copySt = prev.map((obj) => {
        const copy = { ...obj }
        if (copy[type] === atr) {
          copy[type] = ""
        }
        return copy
      })
      copySt[index][type] = atr
      const change = {
        index,
        type,
        prev: prev[index][type],
        next: atr
      }
      mkCh(change)
      return copySt
    })
  };

  return (<>
    {Object.keys(hObj).map((type, ind) => <Box key={ind} sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{ marginBottom: "18px" }}>
        <InputLabel id="ein-select-label">{type}</InputLabel>
        <Select
          sx={{ color: "black", fontWeight: 700, backgroundColor: "#85d9b0" }}
          labelId="ein-select-label"
          id="ein-select"
          label={type}
          value={hObj[type]}
          onChange={(e) => { handleChange(e, type) }}
        >
          <MenuItem value="" ><em>{type}</em></MenuItem>
          {Object.values(attrs[type]).map((atr, key) => <MenuItem key={key} value={atr} >{atr}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>)}
  </>
  )
}
export default SetAttr