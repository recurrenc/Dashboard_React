import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/golbal/Topbar";
import { colorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;

