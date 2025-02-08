import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App/>
        </ThemeProvider>
    </StrictMode>,
)
