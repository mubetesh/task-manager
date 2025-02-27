'use server'

import Mood from '@/model/Mood'
import connectToDatabase from '@/lib/db'

const getMood = async () => {
    try {
       await connectToDatabase()
       const moods = await Mood.find({})
       return JSON.parse(JSON.stringify(moods))
    } catch (error) {
        console.log("Error in getting moods" + error)
        return []
    }
}

export default getMood