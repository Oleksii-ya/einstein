import { useContext, useEffect, useState } from 'react';

import conditionsHandler from './conditionsHandler';
import { types } from './data';
import TaskList from './TaskList';
import TaskInput from './input/TaskInput';
import { Box } from '@mui/material';
import { StChoiceContext } from '../../App';
import StateSelection from '../StateSelection';

const houseTemplate = {
  [types.color]: "",
  [types.nation]: "",
  [types.drink]: "",
  [types.cigar]: "",
  [types.animal]: ""
}

const OptionsTable = () => {
  const stChoice = useContext(StChoiceContext)
  const [curScheme, setCurScheme] = useState(new Array(5).fill(null).map(() => ({ ...houseTemplate })))
  const rules = conditionsHandler(curScheme)

  useEffect(() => {
    stChoice.stArr.push(curScheme)
    stChoice.curSt = 0
    stChoice.setSt = setCurScheme
  }, [])

  return (
    <Box >
      <TaskList rules={rules} />
      <StateSelection />
      <TaskInput st={curScheme} setSt={setCurScheme} />
    </Box>
  )
}
export default OptionsTable