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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  companyName: z.string(),
  companyAddress: z.string(),
  contactNumber: z.string(),
  contactPerson: z.string(),
});

const SignUpForm = () => {
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
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("Form submission successful:", response);
      setFormSubmitted(true); // Set to true for success as well
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
    };
  return (
    <div className="item-center justify-center">
      <div className=" text-center">
        <h1 className="font-bold text-[25px]">Sign Up</h1>
        <h1 className="text-gray-500 text-[13px]">
          Enter your credentials bellow to sign up for an account
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
                    <Input className="text-xs mt-2" placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyAddress"
              render={({ field }) => (
                <FormItem> 
                  <FormControl>
                    <Input className="text-xs mt-2" placeholder="Company Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem> 
                  <FormControl>
                    <Input className="text-xs mt-2" placeholder="Contact Person" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem> 
                  <FormControl>
                    <Input className="text-xs mt-2" placeholder="Contact Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem> 
                  <FormControl>
                    <Input className="text-xs mt-2" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl >
                    <Input className="text-xs" placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
            <Button
                className="w-[200px] bg-white text-black  border-b-gray-60 border hover:text-white hover:bg-blue-500"
                type="submit"
              >
                Sign up with Email
              </Button>
            </div>
            <div className="text-center">
                <h1 className="text-xs text-gray-400">━━━━━━━ OR CONTINUE WITH ━━━━━━━</h1>
            </div>
            <div className="flex justify-center">
              <Button
                className=" bg-white text-black border border-gray-60 hover:text-white hover:bg-blue-500"
                type="submit"
              >
                <div className="w-6 h-6 mr-2">
                  <FaGoogle className="mt-[2px] w-5 h-5"/>
                </div>
                Sign up with Google
              </Button>
            </div>
          
            <div className="text-center">
                <a href="/login/signup"><h1 className="text-xs text-gray-400">Already have an account? Sign in</h1></a>
            </div>
            {formSubmitted && (
                <div className="mt-4 text-center text-[9px]">
                  {errorMessage ? (
                    <p className=" text-red-500">{errorMessage}</p>
                  ) : (
                    <p className=" text-green-500">
                      Your request is being processed. Please check your email
                      for further instructions.
                    </p>
                  )}
                </div>
              )}
          </form>
        </Form>
      </div>
  );
};

export default SignUpForm;
