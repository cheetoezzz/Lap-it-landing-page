"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

const formSchema = z.object({
    companyName: z.string().min(1, {message: "Company name must be at least 1 character."}),
    companyAddress: z.string().min(1, {message: "Company address must be at least 1 character."}),
    contactNumber: z.string().min(11, {message: "Contact number must be at least 11 characters."}),
    contactPerson: z.string().min(5, {message: "Contact person must be at least 5 characters."}),
    username: z.string().min(4, {message: "Username must be at least 4 characters."}),
    email: z.string().email({message: "Invalid email format."}),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmpassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters' }),
   }).refine(data => data.password === data.confirmpassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
   });
const CreateaccountForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      // Log form data in JSON format to the terminal
      console.log("Form Data:", JSON.stringify(values));
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("Create account successful:", response);
      alert("Account Created Successfully")
      setFormSubmitted(true); // Set to true for success as well
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }
  return (
    <div className="item-center justify-center">
      <div className=" text-center">
        <h1 className="font-bold text-[25px]">Create Account</h1>
        <h1 className="text-gray-500 text-[13px]">
          Enter your credentials bellow to create for an account
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Company Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Company Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Contact Person"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Contact Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-xs mt-2"
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button
              className="w-[200px] bg-white text-black  border-b-gray-60 border hover:text-white hover:bg-blue-500"
              type="submit"
            >
              Submit
            </Button>
          </div>
          {formSubmitted && (
            <div className="mt-4 text-center text-[13px]">
              {errorMessage ? (
                <p className=" text-red-500">{errorMessage}</p>
              ) : (
                <p className=" text-green-500">
                  Account Successfully Created
                </p>
              )}
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CreateaccountForm;
