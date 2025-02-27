// deleteMood.ts
'use server'
import Mood from '@/model/Mood'
import connectToDatabase from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const deleteMood = async (prevState: any, formData: FormData) => {
  try {
    await connectToDatabase();
    
    const id = formData.get('id') as string;
    
    if (!id) {
      return { error: "Mood ID is required", success: false };
    }

    const result = await Mood.findByIdAndDelete(id);
    
    if (!result) {
      return { error: "Mood not found", success: false };
    }

    revalidatePath('/');
    redirect('/');
    return { error: null, success: true };
    
  } catch (error) {
    console.error("Delete error:", error);
    return { 
      error: error instanceof Error ? error.message : "Failed to delete mood", 
      success: false 
    };
  }
};