'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { defaultValues, onSubmit, schema } from "./utils";

export function TestFormUncontrolled() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    console.log('Rerendering UNcontrolled form');

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2" >
                <label htmlFor="firstName">First name</label>
                <input {...register('firstName')} className="text-black" />
                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

                <label htmlFor="lastName">Last name</label>
                <input {...register('lastName')} className="text-black" />
                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

                <label htmlFor="email">Email</label>
                <input {...register('email')} className="text-black" />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <Button className="mt-5" type="submit">
                Submit
            </Button>
        </form>
    );
}
