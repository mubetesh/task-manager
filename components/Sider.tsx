import React from 'react'

interface SiderProps {
    isOpen : boolean,
    onClose : () => null,
    children? : React.ReactNode,
    mood? : {_id:string, note: string, mood: string}
}

const Sider: React.FC<SiderProps> = ({isOpen,onClose,children,mood}) => {
  return (
    <>
    {isOpen && (
        <div onClick = {onClose} className="fixed inset-0 z-40 bg-black bg-opacity-50">

        </div>
    )}
    <div className={`fixed top-0 right-0 h-full width-[400px] shadow-2xl transition-transform transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' :  'translate-x-full'}`}>
        <button onClick={onClose} className="p-4 text-black">
            Close
        </button>
    </div>
    </>
  )
}

export default Sider