'use client'
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm , SubmitHandler } from 'react-hook-form';
import {z} from "zod";
import { useRouter } from 'next/navigation';

const schema = z.object({
    companyName: z.string(),
    companyAddress: z.string(),
    contactNumber: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmpassword: z.string().min(8),
})

type FormFields = z.infer<typeof schema>;
const SignUpPage = () => {
    const { register, handleSubmit, setError, formState: {errors}} = useForm<FormFields>({
        resolver: zodResolver(schema)
    });
    const router = useRouter();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            if (!data.companyName){
                setError('companyName', { message: 'Company Name is empty' });
                return;
            }
            if (!data.companyAddress){
                setError('companyAddress', { message: 'Company Address is empty' });
                return;
            }
            if (!data.username){
                setError('username', { message: 'Username is empty' });
                return;
            }
            if (!data.contactNumber){
                setError('contactNumber', { message: 'Contact Number is empty' });
                return;
            }
            if (data.password !== data.confirmpassword) {
                setError('confirmpassword', { message: 'Passwords do not match' });
                return;
            }
            // Make a POST request to your server
            const response = await axios.post('/api/user', {
                ...data,
                confirmpassword: data.password,
            });
            if (response.status === 201) {
                // Clear any previous errors
                setError('root', { message: 'User created successfully' });
                // Do something with the successful response (e.g., show success message)
                router.push('/login/signin');
                console.log('Account created successfully:', response.data);
                alert('Account created successfully');
              }
          } catch (error: any) {
            if (error.response && error.response.status === 409) {
              // Handle conflict (user with the same email already exists) error
              setError('email', { message: error.response.data.message }); // Set error for the 'email' field
              console.error('Email already exists:', error.response.data.message);
            } else if (error.response.status === 400) {
                // Handle other validation errors
                setError('root', { message: error.response.data.message });
                console.error('', error.response.data.message);
              } else {
                // Handle other network errors or issues
                setError('root', { message: 'Failed to create an account.' });
                console.error('Error creating account:', error);
              }
            }
    };

  return (
    <div className="relative h-screen">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bgimage.svg')",
        filter: "blur(0px)", // Adjust the blur radius as needed
      }}
    />
    <main className="relative z-10 flex justify-center items-center h-full flex-col">
      <a href="/" className="absolute top-0 left-0 m-4 text-amber-50">Back to Home</a>
      <img src="/Lapwhitelogo.svg" alt="Logo" className="w-40 h-auto mt-8" />
      <div className="bg-white rounded-lg flex items-center mt-8">
        <div className="">
          <img src="/signupleftimage.svg" alt="Image" className="w-64 h-3/6" />
        </div>
        <div className="pt-5">
          <h1 className="text-3xl font-semibold mb-1 ml-60">Login</h1>
          <p className="text-lg mb-4 ml-32 mr-32">Welcome Back! Please enter your details</p>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("companyName")} type="text" placeholder="Company Name " className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("username")} type="text" placeholder="Username" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("email")} type="text" placeholder="Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("companyAddress")} type="text" placeholder="Company Address" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("contactNumber")} type="text" placeholder="Contact Number" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("password")} type="password" placeholder="Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <input {...register("confirmpassword")} type="password" placeholder="Confirm Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12">Register</button>
      {errors.companyName && (<div>{errors.companyName.message}</div>)}
      {errors.username && (<div>{errors.username.message}</div>)}
      {errors.email && (<div>{errors.email.message}</div>)}
      {errors.companyAddress && (<div>{errors.companyAddress.message}</div>)}
      {errors.password && (<div>{errors.password.message}</div>)}
      {errors.confirmpassword && (<div>{errors.confirmpassword.message}</div>)}
      {errors.root && (<div>{errors.root.message}</div>)}

    </form>
    </div>
    </div>
  </main>
</div>
  );
};

export default SignUpPage;