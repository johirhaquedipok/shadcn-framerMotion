import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  EnvelopeClosedIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";

const RegisterFormSchema = z
  .object({
    userName: z
      .string()
      .email("Please enter a valid email address.")
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(30, {
        message: "Username must not be longer than 30 characters.",
      }),

    email: z
      .string()
      .email("Please enter a valid email address.")
      .min(2, {
        message: "email must be at least 2 characters.",
      })
      .max(30, {
        message: "email must not be longer than 30 characters.",
      }),
    // .or(z.string()),

    password: z
      .string()
      .min(6, "Please choose a longer password")
      .max(64, "Consider using a short password"),
    confirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Password did not match",
  });

type ProfileFormValues = z.infer<typeof RegisterFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  userName: "",
  email: "",
  password: "",
  confirm: "",
};

export function Register() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues,
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  // password toggle handle
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 ">
          <code className="text-white">{JSON.stringify(data, null, 2)} </code>
        </pre>
      ),
    });
  }

  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center space-y-3 px-6">
      <Card className="w-full max-w-md space-y-3">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <div className=" flex items-center relative">
                      <EnvelopeClosedIcon className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="username"
                          type="text"
                          className="pl-11 "
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className=" flex items-center relative">
                      <EnvelopeClosedIcon className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="email"
                          type="email"
                          className="pl-11 "
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <div className=" flex items-center relative">
                      <HiOutlineLockClosed className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="password"
                          type={showPassword ? "text" : "password"}
                          className="pl-11 "
                          {...field}
                        />
                      </FormControl>

                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
                      >
                        {showPassword ? (
                          <EyeOpenIcon className="mx-3 h-5 w-5 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                        ) : (
                          <EyeClosedIcon className="mx-3 h-5 w-5 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                        )}
                      </button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm</FormLabel>

                    <div className=" flex items-center relative">
                      <HiOutlineLockClosed className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="******"
                          type={"password"}
                          className="pl-11 "
                          {...field}
                        />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className=" p-0">
                <Button className="w-full">Create account</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
