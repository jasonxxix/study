import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string().min(3),
    email: z.string().email(),
})

type formSchemaType = z.infer<typeof formSchema>;

export default function() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formSchemaType>({ resolver: zodResolver(formSchema)});

    const onSubmit: SubmitHandler<formSchemaType> = (data) => {
        console.log("onSubmit::", data);
    }
    return <div className="bg-gray-400 w-[800px] m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:</label>
            <input id="firstName" {...register("firstName")}/>
            <label>Last Name:</label>
            <div>
                <input id="lastName" {...register("lastName")}/>
                {errors.lastName && <span className="text-red-900">{errors.lastName.message}</span>}
            </div>
            <label>Email:</label>
            <div>
                <input id="email" {...register("email")}/>
                {errors.email && <span className="text-red-900">{errors.email?.message}</span>}
            </div>
            
            <button type="submit">Submit</button>
        </form>
    </div>
}