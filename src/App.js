import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import axios from 'axios';
import { lightTheme, darkTheme } from './theme/ThemeVariable';
import GlobalStyle from './theme/GlobalStyle';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [invoiceData, setInvoiceData] = useState([]);
  const [chosenInvoice, setChosenInvoice] = useState([]);

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/invoices').then(response => {
      console.log('promise fulfilled');
      setInvoiceData(response.data);
    });
  }, []);
  console.log('render', invoiceData.length, 'invoices');

  const handleClick = data => {
    setChosenInvoice(data);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/details">
            <Details chosenInvoice={chosenInvoice} setChosenInvoice={setChosenInvoice} />
          </Route>
          <Route path="/">
            <Home toggleTheme={toggleTheme} invoiceData={invoiceData} handleClick={handleClick} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
