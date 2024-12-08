import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import App from './App';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator
        components={{
          SignUp: {
            FormFields() {
              return (
                <>
                  <Authenticator.SignUp.FormFields />
                  <input name="email" placeholder="Email" />
                  <input name="custom:first_name" placeholder="First Name" />
                  <input name="custom:last_name" placeholder="Last Name" />
                  <input name="custom:role" placeholder="Role" />
                </>
              );
            },
          },
        }}
      >
        <App />
      </Authenticator>
    </BrowserRouter>
  </React.StrictMode>
);
