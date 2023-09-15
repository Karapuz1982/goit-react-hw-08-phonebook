import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Spinner
      size="xl"
      emptyColor="purple.600"
      thickness="5px"
      color="purple.100"
      speed="0.65s"
    />
  ) : (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem _notLast={{ mb: '12px' }} key={id}>
          <Box display="flex" alignItems="center" gap="25px">
            <Box>
              <Text as="span" fontSize="18px" mr={1}>
                {name}
              </Text>
              :
              <Text as="span" fontSize="18px" ml={3}>
                {number}
              </Text>
            </Box>
            <Button
              ml="auto"
              size="sm"
              onClick={() => {
                toast({
                  description: 'You have successfully deleted the contact!',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                });
                dispatch(deleteContact(id));
              }}
              type="button"
              _hover={{ bg: 'red' }}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;