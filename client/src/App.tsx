import './App.scss';
import { Fragment, useEffect } from 'react';
import AuctionsList from './components/screens/AuctionsList/AuctionsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {

    return (
      <Router>
        <Routes>
          <Route  path="/" element={<AuctionsList/>}/>
        </Routes>
    </Router>
    );
}

export default App;
