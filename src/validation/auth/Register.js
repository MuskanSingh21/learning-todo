import { number, object, string } from 'yup';

export const registerValidationSchema = object({
  full_name: string().required('Full name is required field'),
  email: string().required('Email is reqired field'),
  phone: number().max(10).required('Phone no. is must t fill'),
  password: string().min(5).max(14).required('Password must be strong'),
});
