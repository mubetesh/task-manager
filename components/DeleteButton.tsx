"use client";
import React, { useActionState } from "react";
import { FiTrash } from "react-icons/fi";
import {deleteMood} from '@/lib/actions/deleteMood'

interface DeleteButtonProps {
  id: string ;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [state, formAction] = useActionState(deleteMood, null);
  return (
    <div>
      <form action={formAction}>
        <input id="id" name="id" defaultValue={id} hidden/>
        <button type='submit'>
            <FiTrash className="h-4 w-4 text-red-900 hover:text-red-600"/>
        </button>
      </form>
    </div>
  );
};

export default DeleteButton;
