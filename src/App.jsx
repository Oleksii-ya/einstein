import { createContext } from 'react';

import './App.css'
import Task from './components/Task'
import Facts from './components/Facts';

import { Container } from '@mui/system';
import OptionsTable from './components/table/OptionsTable';

export const StChoiceContext = createContext({});

function App() {
  return (<>
    <Container maxWidth="xl">
      <StChoiceContext.Provider value={{
        stArr: [],
        curSt: 0,
        setSt: () => { }
      }}>
        <Task />
        <OptionsTable />
        <Facts />
      </StChoiceContext.Provider>
    </Container>
  </>
  )
}

export default App
