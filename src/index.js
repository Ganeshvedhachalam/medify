import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Home from './blogs/Home';

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { createTheme,ThemeProvider } from '@mui/material';
import Search from './blogs/Search';
import MyBookings from './blogs/MyBookings';



const router = createBrowserRouter(
[
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"booking",
        element:<MyBookings/>
        
      },
      {
        path:"/",
        element:<Home/>,
        
      },
    ]   
  }
   
]

);


export const theme = createTheme( {
  palette:{
    primary: {
      main:"#2AA7FF",
      green:"#00A500",
      secondary:"#1B3C74",

    },
  
  },
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

theme.typography.h2 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
