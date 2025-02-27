import { useActionState } from "react";
import { postMood } from "@/lib/actions/postMood";
import { updateMood } from "@/lib/actions/updateMood";
import SubmitButton from "./SubmitButton"


interface MoodFormProps {
  mood?: { _id: string; note: string; mood: string };
  isEdit?: boolean;
}

const MoodForm = ({ mood, isEdit = false }: MoodFormProps) => {
  const [state, formAction] = useActionState(
    isEdit ? updateMood : postMood,
    null
  );
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="_id" value={isEdit ? mood?._id : ""} />
        <label
          htmlFor="note"
          className="block text-sm font-medium text-gray-800"
        >
          Note
        </label>
        <input
          type="text"
          name="note"
          id="note"
          defaultValue={isEdit ? mood?.note : ""}
          className="bg-gray-100 border-black text-gray-900 text-sm rounded-sm  w-full p-2"
        />
        <div id="note-error" aria-label="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-800">{state?.Error?.note}</p>
        </div>
        <label
          htmlFor="mood"
          className="block text-sm font-medium text-gray-800"
        >
          Add Mood
        </label>
        <select
          name="mood"
          id="mood"
          defaultValue={isEdit ? mood?.mood : "Happy"}
          className="bg-gray-100 border-black text-gray-900 text-sm rounded-sm  w-full p-2"
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="indifferent">Indiferrent</option>
          <option value="scared">Scared</option>
        </select>
        <div id="mood-error" aria-label="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-800">{state?.Error?.mood}</p>
        </div>
        <SubmitButton label = {isEdit? "Update Mood" : "Add Mood" }/>
      </form>
    </div>
  );
};

export default MoodForm;
