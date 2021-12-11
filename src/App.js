import Search from "./components/Search";
import Profile from "./components/Profile";
//style
import GlobalStyle, { lightMode, darkMode } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { darkModeSelect } from "./features/darkModeSlice";

function App() {
  const darkModeState = useSelector(darkModeSelect);
  return (
    <div className="App">
      <ThemeProvider theme={darkModeState ? darkMode : lightMode}>
        <GlobalStyle />
        <Search />
        <Profile />
        <footer><p>Created by Vinh Nhan</p></footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
