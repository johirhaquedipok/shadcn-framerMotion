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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

const ChangeApiKeySchema = z.object({
  key: z.string(),
  isActive: z.boolean().default(false).optional(),
});

type ApiKeyFormValues = z.infer<typeof ChangeApiKeySchema>;

const defaultValues: Partial<ApiKeyFormValues> = {
  key: "",
  isActive: false,
};

export function ManageApiKey() {
  const form = useForm<ApiKeyFormValues>({
    resolver: zodResolver(ChangeApiKeySchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ApiKeyFormValues) {
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
          <CardTitle className="text-2xl text-center">Manage API key</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="key"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <div className=" flex items-center relative">
                      <KeyRound className="absolute ml-2 h-6 w-6 text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="Type your own api key"
                          type={"text"}
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
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Use different Api Key</FormLabel>
                      <FormDescription>
                        You can manage Api Key in the
                        <Link to="/examples/forms">mobile settings</Link> page.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <CardFooter className="p-0">
                <Button className="w-full">Activate</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
