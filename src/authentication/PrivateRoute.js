import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element}) => {
    const auth=useState(Cookies.get('token') !== undefined);
    console.log(auth);
  return auth ? (
    element
  ) : (
    <Navigate to="/login" replace/>
  );
};

export default PrivateRoute;
