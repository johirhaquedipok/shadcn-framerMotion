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
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const EmailFormSchema = z.object({
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

  newEmail: z
    .string()
    .email("Please enter a valid email address.")
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .max(30, {
      message: "email must not be longer than 30 characters.",
    }),
});

type EmailFormValues = z.infer<typeof EmailFormSchema>;

const defaultValues: Partial<EmailFormValues> = {
  email: "",
  newEmail: "",
};

export function StepTwo() {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: EmailFormValues) {
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
          <CardTitle className="text-2xl text-center">Manage Email</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <div className=" flex items-center relative">
                      <EnvelopeClosedIcon className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="Email"
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
                name="newEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Email</FormLabel>

                    <div className=" flex items-center relative">
                      <EnvelopeClosedIcon className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="New Email"
                          type={"email"}
                          className="pl-11 "
                          {...field}
                        />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="p-0">
                <Button className="w-full">Change Email</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
