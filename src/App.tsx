import './App.css';
import { ThemeProvider } from '@mui/material'
import { Container } from './layouts/Main/Container';
import { Footer } from './layouts/Footer/Footer';
import { themeDark } from './assets/Theme/ThemeDark';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './layouts/Menu/Menu';
import { UserContext } from './common/Contexts/UserContext';
import { useState } from 'react';
import { User } from './common/Entities/UserDtos/User';

function App() {
  const [user, setUser] = useState<User>(null);

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <ThemeProvider theme={themeDark}>
          <BrowserRouter>
            <Menu/>
            <Container/>
            <Footer/>
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
