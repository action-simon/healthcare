"use client";

import { Forward } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useToast } from "@/components/ui/use-toast";
import * as m from "@/paraglide/messages";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  user_name: z.string().min(2).max(50),
  user_email: z.string().email({ message: m.Enter_a_valid_email() }),
  message: z.string().min(3).max(1000),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const templateParams = {
      user_name: data.user_name,
      user_email: data.user_email,
      message: data.message,
    };

    emailjs
      .send("service_wbg8n02", "template_isrrrvs", templateParams, {
        publicKey: "j0nvKjLyIwzykjWpc",
      })
      .then(() => {
        toast({
          title: m.Success(),
          description: m.Your_message_has_been_sent_(),
        });
        form.reset();
      })
      .catch((error) => {
        console.error("error", error);
        toast({
          variant: "destructive",
          title: m.Error(),
          description: m.There_was_a_problem_with_your_request(),
        });
      });
  }

  return (
    <section id="contact">
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl font-bold md:text-5xl">
          {m.Contact_us()}
        </h3>
        <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
          {m.We_are_happy_to_hear_more_about_you()}
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto w-full gap-4 space-y-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12"
          >
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{m.Name()}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={m.Enter_your_name()}
                      className="bg-muted/50 dark:bg-muted/80"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{m.Email()}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={m.Enter_your_email()}
                      className="bg-muted/50 dark:bg-muted/80"
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
                  <FormLabel>{m.Message()}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={m.We_are_happy_to_hear_from_you()}
                      className="min-h-[100px]  bg-muted/50 dark:bg-muted/80"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              <Forward className="mr-2 h-5 w-5" />
              {m.Send_your_message()}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
