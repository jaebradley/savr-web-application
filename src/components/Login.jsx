import React, { useCallback } from 'react';
import axios from 'axios';

import GoogleLogin from 'react-google-login';

function Login() {
  const handleFailure = useCallback((data) => console.log('failed login', data), []);
  const handleSuccess = useCallback((data) => {
    const { tokenId } = data;
    axios.post(
      'http://localhost:8000/authentication/google',
      { token: tokenId },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }, [axios]);
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  );
}

export default Login;
