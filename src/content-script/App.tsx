import { Paper, SvgIcon, Typography } from "@mui/material";
import ChromeIcon from "../../static/chrome.svg";

function App() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography>Hello World from content script!</Typography>

      {/* Example of using SVG files as components */}
      <SvgIcon
        component={ChromeIcon}
        sx={{ fill: "none", color: "primary.main" }}
      />
    </Paper>
  );
}

export default App;
