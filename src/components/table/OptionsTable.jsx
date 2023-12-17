import { useState } from 'react';

import conditionsHandler from './conditionsHandler';
import { types } from './data';
import TaskList from './TaskList';
import TaskInput from './input/TaskInput';
import { Box } from '@mui/material';

const houseTemplate = {
  [types.color]: "",
  [types.nation]: "",
  [types.drink]: "",
  [types.cigar]: "",
  [types.animal]: ""
}

const OptionsTable = () => {
  const [curScheme, setCurScheme] = useState(new Array(5).fill(null).map(() => ({ ...houseTemplate })))
  const rules = conditionsHandler(curScheme)

  return (
    <Box >
      <TaskList rules={rules} />
      <TaskInput st={curScheme} setSt={setCurScheme} />
    </Box>
  )
}
export default OptionsTable