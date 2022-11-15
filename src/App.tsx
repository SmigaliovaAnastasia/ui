import './App.css';
import { ThemeProvider } from '@mui/material'
import { Container } from './layouts/Main/Container';
import { Footer } from './layouts/Footer/Footer';
import { themeDark } from './assets/Theme/ThemeDark';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './layouts/Menu/Menu';

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={themeDark}>
        <BrowserRouter>
          <Menu/>
          <Container/>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
