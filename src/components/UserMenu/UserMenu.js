import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" gap="30px" ml="auto">
      <p>{user.name}</p>
      <Button
        variant="link"
        color="inherit"
        _hover={{ textDecoration: 'none', color: 'purple.600' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;