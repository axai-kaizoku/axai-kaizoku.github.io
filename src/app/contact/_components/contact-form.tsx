"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

// const BASEURL = "http://localhost:3000"
const BASEURL = "https://axai-kaizoku.github.io"

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .refine((v) => v.trim().length >= 2),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .refine((v) => v.trim().length >= 10, { message: "Invalid message" }),
})

export default function ContactForm() {
  const [pending, setPending] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // show a loading toast
    // const toastId = toast.loading("Submitting your message...")

    setPending(true)
    try {
      const res = await emailjs.send(
        "service_4qqth59", // service ID
        "template_vf2mcx4", // template ID
        {
          from_name: values.name,
          from_email: values.email,
          message: `${values.name} - ${values.email} - ${values.message}`,
        },
        "ZrRVZQQnvYrSp1epQ" // public key
      )

      if (res.status !== 200) {
        toast.error("Failed to send your message. Please try again.")
        return
      }

      // EmailJS returns status 200 even if email fails, so you can optionally check res.text
      form.reset()

      toast.success("Your message has been sent successfully!")
    } catch (err) {
      console.error(err)
      toast.error("Failed to send your message. Please try again.")
    }
    setPending(false)
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <div className="mx-auto w-[20rem]  max-w-lg">
        <div className="space-y-4">
          <h1 className="text-5xl my-6">Contact.</h1>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Your name"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={pending}>
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
