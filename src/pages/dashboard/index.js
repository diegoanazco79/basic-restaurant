import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { loginApp } from 'store/slices/auth';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const setAuthToken = (token) => dispatch(loginApp(token));

  return (
    <Button onClick={() => { history.push('/login'); setAuthToken(''); }}>Logout</Button>
  );
}

export default Dashboard;
