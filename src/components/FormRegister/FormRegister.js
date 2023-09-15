import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s'-]+$/, 'Please enter a valid name.')
    .required('Name is required!'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required!'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      'Password must contain at least one letter, one number, and one special character'
    )
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm password is required!'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: ({ name, email, password }) => {
      dispatch(register({ name, email, password }));
      formik.resetForm();
    },
  });

  return (
    <Flex justify="center" align="center" h="100vh">
      <Box bg="white" p={10} rounded="md" w={500} boxShadow="xl">
        <VStack as="form" spacing={4} noValidate onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            mb={2}
            isInvalid={formik.touched.name && formik.errors.name}
          >
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              variant="filled"
              focusBorderColor="purple.400"
            />

            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={2}
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
            mb={2}
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                variant="filled"
                focusBorderColor="purple.400"
              />
              <InputRightElement>
                <Button
                  bg="transparent"
                  _hover={{ bg: 'none' }}
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <ViewOffIcon
                      color="purple.500"
                      _hover={{ color: 'purple.600' }}
                    />
                  ) : (
                    <ViewIcon
                      color="purple.500"
                      _hover={{ color: 'purple.600' }}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={3}
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          >
            <FormLabel>Confirm password</FormLabel>
            <InputGroup>
              <Input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                variant="filled"
                focusBorderColor="purple.400"
              />
              <InputRightElement>
                <Button
                  bg="transparent"
                  _hover={{ bg: 'none' }}
                  onClick={toggleShowConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <ViewOffIcon
                      color="purple.500"
                      _hover={{ color: 'purple.600' }}
                    />
                  ) : (
                    <ViewIcon
                      color="purple.500"
                      _hover={{ color: 'purple.600' }}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
          </FormControl>

          <Button type="submit" w="full">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RegisterForm;