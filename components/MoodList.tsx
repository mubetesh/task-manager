import React from "react";
import getMood from "@/lib/actions/getMood";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

const moodEmojis: Record<string, string> = {
  happy: "😀",
  sad: "😢",
  angry: "😬",
  indifferent: "😣",
  scared: "🥵",
};

const MoodList = async () => {
  const moods = await getMood();
  return (
    <div>
      {moods?.map((mood: { _id: any; mood: any; note: any }) => (
        <div key={mood._id} className=" flex justigy-between items-center w-full bg-slate-500 text-gray-200 p-2" >
          <div>{moodEmojis[mood.mood] || "😀"} : {mood.note} </div>
          <div>
            <UpdateButton mood = {mood}/>
            <DeleteButton id = {mood._id}/> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodList;
