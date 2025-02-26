'use server'
import connectToDatabase from '../db'
import {z} from 'zod'
import Mood from '@/model/Mood'
import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

const MoodSchema = z.object({
    note: z.string().min(2, 'It should not be less than 2 characters...'),
    mood: z.string().min(1, 'Mood can not be Empty!!!'),
})

export const postMood = async (prevState: any, formData: FormData) => {
    const validatedFields = MoodSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    const note = formData.get("note") as string;
    const mood = formData.get("mood") as string;
    await connectToDatabase();
    try {
        const validatedData = MoodSchema.parse({ note, mood });  // Fixed typo: validatedData
        await Mood.create({
            note: validatedData.note,  // Fixed: use : instead of =
            mood: validatedData.mood,  // Fixed: use : instead of =
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation Error", error.errors);
            throw new Error("Validation Failed, Check the input information");
        }
        console.error("Error in creating Mood", error);  // Fixed: error, not error.errors
        throw new Error("Mood creation Failed");
    }

    revalidatePath("/");
    redirect("/");
}