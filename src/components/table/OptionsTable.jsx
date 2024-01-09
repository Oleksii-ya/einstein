import { useState, useRef } from 'react';

import conditionsHandler from './conditionsHandler';
import { types } from './data';
import TaskList from './TaskList';
import TaskInput from './input/TaskInput';
import { Box } from '@mui/material';
import HistoryMove from '../HistoryMove';

const houseTemplate = {
  [types.color]: "",
  [types.nation]: "",
  [types.drink]: "",
  [types.cigar]: "",
  [types.animal]: ""
}

const OptionsTable = () => {
  const [curScheme, setCurScheme] = useState(new Array(5).fill(null).map(() => ({ ...houseTemplate })))
  const changes = useRef({
    arrChanges: [],
    curPos: -1
  })

  console.log(changes.current)

  const makeChanges = (ch) => {
    const { arrChanges, curPos } = changes.current

    if (curPos + 1 < arrChanges.length) {
      arrChanges.splice(curPos + 1)
    }
    arrChanges.push(ch)
    changes.current.curPos++
  }

  const goBack = () => {
    setCurScheme((prev) => {
      const ch = changes.current
      const changeObj = ch.arrChanges[ch.curPos]
      const newSt = prev.map((obj) => ({ ...obj }))

      newSt[changeObj.index][changeObj.type] = changeObj.prev
      ch.curPos--
      return newSt
    })

  }

  const goForward = () => {
    setCurScheme((prev) => {
      const ch = changes.current
      ch.curPos++
      const changeObj = ch.arrChanges[ch.curPos]
      const newSt = prev.map((obj) => ({ ...obj }))

      newSt[changeObj.index][changeObj.type] = changeObj.next
      return newSt
    })

  }

  const rules = conditionsHandler(curScheme)

  return (
    <Box >
      <TaskList rules={rules} />
      <HistoryMove
        curPos={changes.current.curPos}
        totalCh={changes.current.arrChanges.length}
        goBack={goBack}
        goForward={goForward}
      />
      <TaskInput st={curScheme} setSt={setCurScheme} mkCh={makeChanges} />
    </Box>
  )
}
export default OptionsTable