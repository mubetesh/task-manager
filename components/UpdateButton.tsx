"use client";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import SideDrawer from "./SideDrawer";
import MoodForm from "./MoodForm";

interface UpdateButtonProps {
  mood: { _id: string; mood: string; note: string };
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ mood }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>
        <FiEdit className="h-4 w-4 text-blue-900 hover:text-blue-600" />
      </button>
      <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <MoodForm mood={mood} isEdit={true}/>
      </SideDrawer>
    </div>
  );
};

export default UpdateButton;
