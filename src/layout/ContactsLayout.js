import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Heading } from '@chakra-ui/react';

const ContactsLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Heading as="h2" fontSize={27} fontWeight={700} mb={6} textAlign="center">
        Phonebook
      </Heading>
      <ContactForm />

      <Heading as="h2" fontSize={27} fontWeight={700} mb={6} textAlign="center">
        Contacts
      </Heading>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsLayout;