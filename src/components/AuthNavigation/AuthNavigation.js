
import React from 'react';
import { Link, List, ListItem } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <List display="flex" ml="auto" gap="30px">
      <ListItem listStyleType="none">
        <Link as={NavLink} to="/register">
          Register
        </Link>
      </ListItem>
      <ListItem listStyleType="none">
        <Link as={NavLink} to="/login">
          Log in
        </Link>
      </ListItem>
    </List>
  );
};

export default AuthNav;