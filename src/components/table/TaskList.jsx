import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const TaskList = ({ rules }) => {
  return (
    <nav aria-label="secondary mailbox folders">
      <List>
        {rules.map((rule, ind) => <ListItem disablePadding key={ind}>
          <ListItemIcon>
            <EmojiObjectsIcon sx={{ color: rule.err ? "tomato" : "green" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: rule.err ? "tomato" : "black" }}>{rule.text}</ListItemText>
        </ListItem>
        )}
      </List>
    </nav>
  )
}
export default TaskList