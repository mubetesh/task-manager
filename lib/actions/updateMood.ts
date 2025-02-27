'use server'
import Mood from '@/model/Mood'
import connectToDatabase from '@/lib/db'
import {z} from 'zod'
import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

const MoodSchema = z.object({
    note: z.string().min(2, 'It should not be less than 2 characters...'),
    mood: z.string().min(1, 'Mood can not be Empty!!!'),
})

export const updateMood = async (prevState: any, formData : FormData) => {
    const validatedFields = MoodSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    await connectToDatabase()

    try {
        const note = formData.get('note') as string
        const mood = formData.get('mood') as string
        const id = formData.get('_id') as string

        await Mood.updateOne({_id :id}, {note,mood})
    } catch (error) {
        console.log(
            "Error " + error
        )
    }
    revalidatePath('/')
    redirect('/')
}
