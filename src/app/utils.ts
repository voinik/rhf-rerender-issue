import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
export const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export const defaultValues = {
  firstName: "a",
  lastName: "b",
  email: "",
};

export const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log(data);
}
