// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authenticate from './components/Authenticate';
import RegisterComponent from './components/RegisterComponent';
import GetALLTransfert from './components/GetALLTransfert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetALLTransfert />} />
        <Route path="/register" element={<RegisterComponent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
