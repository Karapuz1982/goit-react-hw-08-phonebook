import React from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors.js';
import { useFormik } from 'formik';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Required!')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    }),
  number: yup
    .string()
    .required('Required!')
    .matches(/^(\+)?[\d\s\-()]+$/, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      excludeEmptyString: true,
    })
    .min(5, 'Phone number should be at least 5 characters long.'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: data => {
      const isDuplicate = contacts.find(contact => contact.name === data.name);

      if (isDuplicate) {
        return toast({
          description: `${data.name} is already in contacts!`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      } else {
        dispatch(addContact(data));
        toast({
          description: 'New contact successfully added!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }

      formik.resetForm();
    },
  });

  return (
    <Box mb={10} w={300}>
      <VStack as="form" spacing={4} noValidate onSubmit={formik.handleSubmit}>
        <FormControl
          isRequired
          isInvalid={formik.touched.name && formik.errors.name}
        >
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            focusBorderColor="purple.400"
            variant="outline"
            placeholder="Enter name"
            borderColor="#44337A"
          />

          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={formik.touched.number && formik.errors.number}
          mb={3}
        >
          <Input
            type="text"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            focusBorderColor="purple.400"
            variant="outline"
            placeholder="Enter phone number"
            borderColor="#44337A"
          />
          <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
        </FormControl>

        <Button type="submit">Add contact</Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;