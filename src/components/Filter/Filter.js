import React from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Box mb={5}>
      <FormControl>
        <FormLabel fontWeight="400">
          Find contacts by name and phone number
        </FormLabel>
        <Input
          type="text"
          focusBorderColor="purple.400"
          variant="outline"
          value={filter}
          onChange={handleFilter}
          w={300}
          borderColor="#44337A"
        />
      </FormControl>
    </Box>
  );
};

export default Filter;