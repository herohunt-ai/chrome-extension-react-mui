import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  CssBaseline,
  Paper,
  SvgIcon,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ChromeIcon from "../../static/chrome.svg";
import theme from "../theme";

interface AppProps {
  cache: EmotionCache;
}

function App({ cache }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper sx={{ padding: 2 }}>
          <Typography>Hello World from content script!</Typography>

          {/* Example of using SVG files as components */}
          <SvgIcon
            component={ChromeIcon}
            sx={{ fill: "none", color: "primary.main" }}
          />
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
