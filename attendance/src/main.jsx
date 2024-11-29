
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>,
)
