'use client'
import React, {useState} from 'react'
import SideDrawer from "./SideDrawer"
import MoodForm from "./MoodForm";

const ActionBar: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev)
    }
    const closeDrawer = () => {
        setDrawerOpen(false)
    }
  return (
    <section className="w-full bg-gray-300 flex my-6">
        <div className="mx-auto max-w-screen-sm w-full p-4">
            <button
            onClick={toggleDrawer}
            className="bg-purple-500 text-white px-4 py-2 rounded-md">
                Post Mood
            </button>
            <SideDrawer 
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            >
                <MoodForm />
            </SideDrawer>
        </div>
    </section>
  )
}

export default ActionBar