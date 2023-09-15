import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { login } from 'redux/auth/authOperations';
import * as yup from 'yup';
import useAuth from 'hooks/useAuth';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter valid email')
    .required('Please enter your email address.'),
  password: yup.string().required('Please enter your password.'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: value => {
      dispatch(login(value));
      formik.resetForm();
    },
  });

  return (
    <Flex justify="center" align="center" h="75vh">
      <Box bg="white" p={10} rounded="md" w={500} boxShadow="xl">
        {error === 400 && (
          <Text as="p" color="red.500" fontSize="sm" lineHeight="normal" mb={2}>
            Incorrect email address or password.
          </Text>
        )}
        <VStack as="form" spacing={4} noValidate onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            mb={3}
            isInvalid={formik.touched.email && formik.errors.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="filled"
              focusBorderColor="purple.400"
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              variant="filled"
              focusBorderColor="purple.400"
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <Button type="submit" w="full">
            Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginForm;