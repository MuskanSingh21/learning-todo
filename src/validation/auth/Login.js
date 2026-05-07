import { object, string } from 'yup';

export const loginValidationSchema = object({
  email: string().required('Email is required field'),
  password: string().min(6).max(15).required('Password must be strong'),
});
