import React from 'react'

interface SideDrawerProps {
    isOpen : boolean,
    onClose : () => void,
    children? : React.ReactNode,
    mood? : {_id:string, note: string, mood: string}
}

const SideDrawer: React.FC<SideDrawerProps> = ({isOpen,onClose,children,mood}) => {
  return (
    <>
    {isOpen && (
        <div onClick = {onClose} className="fixed inset-0 z-30 bg-black bg-opacity-50">

        </div>
    )}
    <div className={`fixed top-0 right-0 h-full w-[300px] shadow-2xl z-50 bg-white transition-transform transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' :  'translate-x-full'}`}>
        <button onClick={onClose} className="p-4 text-black">
            Close
        </button>
        <div className="p-4">
          <h1 className="text-lf font-semibold">Vibe Check</h1>
          {children}
        </div>
    </div>
    </>
  )
}

export default SideDrawer