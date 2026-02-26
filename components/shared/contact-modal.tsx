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
import { Loader2, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
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
      <DialogContent className="border-border bg-card sm:max-w-[440px]">
        {/* Acid top stripe */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px] rounded-t-lg"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--acid)), hsl(var(--acid) / 0))",
          }}
        />

        <DialogHeader className="space-y-1 pt-2">
          <DialogTitle
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            Contact Me
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {`Fill out this form to get in touch. I'll get back to you as soon as possible.`}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-border bg-background text-sm transition-colors focus-visible:border-acid/60 focus-visible:ring-1 focus-visible:ring-acid/30"
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-border bg-background text-sm transition-colors focus-visible:border-acid/60 focus-visible:ring-1 focus-visible:ring-acid/30"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[110px] border-border bg-background text-sm transition-colors focus-visible:border-acid/60 focus-visible:ring-1 focus-visible:ring-acid/30"
                      placeholder="What's on your mind?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSending}
                className="group relative flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{
                  background: "hsl(var(--acid))",
                  color: "hsl(var(--background))",
                }}
              >
                {isSending ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    Send Message
                  </>
                )}
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
