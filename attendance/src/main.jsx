
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { MantineProvider } from '@mantine/core';
import { Provider } from "react-redux"; // Import Provider
import store from "./app/store"; // Import the Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>,
  </Provider>
)
