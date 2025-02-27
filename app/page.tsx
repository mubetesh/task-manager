import Header from "@/components/Header"
import ActionBar from "@/components/ActionBar"
import MoodList from "@/components/MoodList"
import {Suspense} from 'react'

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-sm w-full p-4">
      <Header />
      <ActionBar />
      <Suspense fallback = "Wait a moment...">
      <MoodList />
      </Suspense>
      
    </div>
  );
}
