import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import App from './App'
import awsconfig from './aws-exports';


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_30MDJhjDj',      
      userPoolClientId: '4uslrmlurtmufb4l7bdgs5or6e',
    }
  }
});

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
                </>
              );
            }
          }
        }}
      >
        <App />
      </Authenticator>
    </BrowserRouter>
  </React.StrictMode>,
)