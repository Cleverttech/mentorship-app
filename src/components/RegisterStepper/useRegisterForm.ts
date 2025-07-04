import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type RegisterFormType, registerSchema } from './validation';

const useRegisterForm = () => {
  const methods = useForm<RegisterFormType>({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      role: 'mentee',
      bio: '',
      skills: [],
      profileImage: undefined,
      credits: 0,
    },
  });

  return methods;
};

export default useRegisterForm;
