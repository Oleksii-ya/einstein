import './App.css'
import Task from './components/Task'
import Facts from './components/Facts';

import { Container } from '@mui/system';
import OptionsTable from './components/table/optionsTable';

function App() {
  return (<>
    <Container maxWidth="xl">
      <Task />
      <OptionsTable />
      <Facts />
    </Container>
  </>
  )
}

export default App
