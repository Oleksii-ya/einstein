import { Box, Grid, Typography } from "@mui/material"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const TaskList = ({ rules }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rules.map((rule, ind) => <Grid item xs={12} sm={6} md={4} key={ind}>
          <Box sx={{ display: "flex" }}>
            <EmojiObjectsIcon sx={{ color: rule.err ? "tomato" : "green", marginRight: "8px" }} />
            <Typography paragraph={true} sx={{ color: rule.err ? "tomato" : "black", fontSize: "18px", marginBottom: 0 }}>{rule.text}</Typography>
          </Box>
        </Grid>
        )}
      </Grid>
    </Box>
  )
}
export default TaskList