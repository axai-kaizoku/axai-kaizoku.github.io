"use client";

import { useCreateTaskMutation, useGetAllTasksQuery } from "@/api/task";

export default function Page() {
  const { data, refetch } = useGetAllTasksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <div>
      Tasks:{" "}
      <pre className="overflow-y-auto h-[40vh]">
        {JSON.stringify(data, null, 2)}
      </pre>
      <br />
      <hr />
      <br />
      Create a task:
      <TaskForm refetch={refetch} />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().refine((v) => v.length > 1, {
    message: "Must be greater than 2 characters.",
  }),
  description: z.string(),
});

export function TaskForm({ refetch }: { refetch: any }) {
  const [pending, setPending] = useState(false);
  const [createTask] = useCreateTaskMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setPending(true);
    try {
      void createTask({
        title: values.title,
        description: values.description,
      });
      refetch(undefined);

      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-[32vh] h-full w-full items-center justify-center px-4">
      <div className="mx-auto w-[20rem]  max-w-lg">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="title">Title</FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          placeholder="Your title"
                          type="text"
                          autoComplete="title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="description">Description</FormLabel>
                      <FormControl>
                        <Textarea
                          id="description"
                          placeholder="Your description"
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
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
