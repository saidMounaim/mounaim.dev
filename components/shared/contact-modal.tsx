"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema } from "@/lib/validators";
import { toast } from "sonner";
import { sendEmail } from "@/lib/actions/contact.actions";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSending(true);
    try {
      await sendEmail(values);
      onClose();
      form.reset();
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Failed to send email");
      console.error("Failed to send email:", error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-teal-50 dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-teal-600">Contact Me</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Fill out this form to get in touch with me. I'll get back to you as
            soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600 dark:text-gray-300">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-teal-400 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Your name"
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
                <FormItem>
                  <FormLabel className="text-gray-600 dark:text-gray-300">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-teal-400 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Your email"
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
                <FormItem>
                  <FormLabel className="text-gray-600 dark:text-gray-300">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-teal-400 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="text-gray-600 dark:text-gray-300 border-teal-600 bg-transparent hover:bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSending}
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
