import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {z} from 'zod';
import InputForm from './components/CustomInput';
import './components/CustomInput.css';
const shcema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});	

type FormValues = z.infer<typeof shcema>;

const CustomForm = () => {
const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
    resolver: zodResolver(shcema)
});

const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
}

return (
<form onSubmit={handleSubmit(onSubmit)}>
    <InputForm name="name" control={control} label="Name" type="text" error={errors.name}/>
    <InputForm name="email" control={control} label="email" type="email" error={errors.email}/>
    <InputForm name="password" control={control} label="password" type="password" error={errors.password}/>
    <InputForm name="confirmPassword" control={control} label="confirmPassword" type="confirmPassword" error={errors.confirmPassword}/>
    <button type="submit">Submit</button>
</form>
)
} 

export default CustomForm;