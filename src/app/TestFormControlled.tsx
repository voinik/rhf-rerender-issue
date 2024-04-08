'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider,  useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { defaultValues, onSubmit, schema } from "./utils";

export function TestFormControlled() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    console.log('Rerendering controlled form');

    return (
        <FormProvider {...form}>
            <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={form.control}
                    render={({ field, formState }) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <label htmlFor={field.name}>First name</label>
                                <input {...field} />
                                {formState.errors.firstName && <span className="text-red-500">{formState.errors.firstName.message}</span>}
                            </div>
                        );
                    }}
                />

                <Controller
                    name="lastName"
                    control={form.control}
                    render={({ field, formState }) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <label htmlFor={field.name}>Last name</label>
                                <input {...field} />
                                {formState.errors.lastName && <span className="text-red-500">{formState.errors.lastName.message}</span>}
                            </div>
                        )
                    }}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, formState }) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <label htmlFor={field.name}>Email</label>
                                <input {...field} />
                                {formState.errors.email && <span className="text-red-500">{formState.errors.email.message}</span>}
                            </div>
                        )
                    }}
                />

                <Button className="mt-5" type="submit">
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
}
