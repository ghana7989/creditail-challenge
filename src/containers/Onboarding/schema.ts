import * as yup from 'yup';

export const schema1 = yup.object().shape({
  ownerName: yup.string().required('Name is required'),
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  aadharNumber: yup
    .string()
    .matches(/^[0-9]{12}$/, 'Please enter a valid Aadhar number')
    .required('Aadhar number is required!!')
    .max(12, 'Aadhar number should be 12 digits long')
    .min(12, 'Aadhar number should be 12 digits long'),
  panNumber: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter a valid PAN number')
    .required('PAN number is required'),
  // DD-MM-YYYY
  dateOfBirth: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
      'Please enter a valid date of birth',
    )
    .required('Date of birth is required'),
});
