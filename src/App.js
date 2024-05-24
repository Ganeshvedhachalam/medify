import React from 'react';
import {Outlet} from "react-router-dom"
import { CssBaseline } from '@mui/material';
import { DownloadApp } from './components/DownloadApp';
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
  <div>
  
    <CssBaseline/>
    <Outlet/>
    <DownloadApp/>
    <Footer/>

  </div>
  );
}

export default App;
