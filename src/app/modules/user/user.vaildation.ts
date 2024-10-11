import { z } from 'zod';

export const createUserValidation = z.object({
  body: z.object({
    username: z.string({
      required_error: 'Username is required',
      invalid_type_error: 'Username must be a string',
    }).min(1, { message: 'Username is required' }), 
  
    email: z.string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    }).email({ message: 'Invalid email format' }),
  
    password: z.string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    }), 
  
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Address must be a string',
    }).min(1, { message: 'Address is required' }), 
  
    image: z.string({
      required_error: 'Image URL is required',
      invalid_type_error: 'Image must be a valid URL',
    }).url({ message: 'Invalid image URL' }),
  
    role: z.enum(['admin', 'user', 'premiumUser'], {
      required_error: 'Role is required',
      invalid_type_error: 'Role must be one of the specified values',
    }).optional(), 
  
    isDeleted: z.boolean({
      invalid_type_error: 'isDeleted must be a boolean',
    }).optional(), 
  })
})
