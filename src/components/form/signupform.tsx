"use client";

import React from "react";
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
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("Form submission successful:", response);

    }   
  return (
    <div className="item-center justify-center">
      <div className=" text-center">
        <h1 className="font-bold text-[25px]">Sign Up</h1>
        <h1 className="text-gray-500 text-[13px]">
          Enter your credentials bellow to sign up for an account
        </h1>
      </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
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
                <FormItem className="-translate-y-5">
                  <FormControl >
                    <Input className="text-xs" placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center -translate-y-9 ">
            <Button
                className="w-[200px] bg-white text-black  border-b-gray-60 border hover:text-white hover:bg-blue-500"
                type="submit"
              >
                Sign up with Email
              </Button>
            </div>
            <div className="text-center -translate-y-12">
                <h1 className="text-xs text-gray-400">━━━━━━━ OR CONTINUE WITH ━━━━━━━</h1>
            </div>
            <div className="flex justify-center -translate-y-16">
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
          </form>
        </Form>
      </div>
  );
};

export default SignUpForm;
