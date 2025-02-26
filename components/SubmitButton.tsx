"use client"
import {useFormStatus} from 'react-dom'
import clsx from 'clsx'

const SubmitButton = ({label}: {label: string}) => {
    const {pending} = useFormStatus();
    const className = clsx(
        "text-white bg-gray-700 font-medium hover:bg-gray-900 rounded-sm w-full px-5 py-2 text-center" , {
        "opacity-50 cursor-progress" : pending,
    }
    )
  return (
    <button
    type="submit"
    className = {className}
    disabled = {pending}>
        {
            label=== "Add Mood" ? (
                <span>{pending? "Saving one moment" : "Save"}</span>
            ) : (
                <span>{pending? "Updating one moment" : "Update"}</span>
            ) 
        }
    </button>
  )
}

export default SubmitButton