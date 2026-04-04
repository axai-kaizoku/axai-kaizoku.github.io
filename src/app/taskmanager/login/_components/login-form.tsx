"use client";

import { login } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/slices/auth.slice";
import { processAuthData } from "@/utils/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().refine((v) => v.length > 0),
});

export function LoginForm() {
  const [pending, setPending] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Logging in...");

    setPending(true);
    try {
      const data = await login({
        email: values.email,
        password: values.password,
      });
      dispatch(
        setAuth({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          userId: data.id,
        })
      );
      processAuthData(data.accessToken, data.refreshToken, data.id);
      router.push("/taskmanager/tasks");

      form.reset();

      toast.success("Logged In!", {
        id: toastId,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to Login. Please try again.", {
        id: toastId,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <div className="mx-auto w-[20rem]  max-w-lg">
        <div className="space-y-4">
          <h1 className="text-5xl my-6">Login.</h1>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="Your email"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          id="password"
                          placeholder="Your password"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full mt-2"
                  disabled={pending}
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
