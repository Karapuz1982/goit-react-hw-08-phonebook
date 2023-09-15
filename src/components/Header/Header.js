import React from 'react';
import { Container, HStack } from '@chakra-ui/react';
import AuthNav from 'components/AuthNavigation/AuthNavigation';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';


const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HStack as="header" pt={7} pb={7} shadow="md">
      <Container maxW="1280px" display="flex" alignItems="center">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </HStack>
  );
};

export default Header;