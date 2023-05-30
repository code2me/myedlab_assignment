import Header from "./components/header/Header";
import WeeklyView from "./components/weekly_view/WeeklyView";
import "./index.css"

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <WeeklyView/>
    </ThemeProvider>
  )
}
export default App
