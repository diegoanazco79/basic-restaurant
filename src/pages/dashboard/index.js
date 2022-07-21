import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { logoutSession } from 'store/slices/auth';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const setAuthToken = (token) => dispatch(logoutSession(token));

  return (
    <Button onClick={() => { history.push('/login'); setAuthToken(''); }}>Logout</Button>
  );
}

export default Dashboard;
