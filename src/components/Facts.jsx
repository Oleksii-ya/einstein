import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Facts = () => {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem disablePadding>
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText >
          Існує думка, що Ейнштейн за допомогою даної задачі вибирав собі асистента — в кого є логічне мислення.
        </ListItemText>
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText >
          Також існує думка, що Ейнштейн вважав, що дану задачу без підручних засобів здатні розв'язати лише 2% людей.
        </ListItemText>
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon>
          <PsychologyIcon />
        </ListItemIcon>
        <ListItemText >
          Існує безліч версій даної задачі.
        </ListItemText>
      </ListItem>
    </List>
  )
}
export default Facts