import { useContext, useState } from "react";
import MemosContext from "./MemosContext";

export default function MemoItem({ index, memo }) {
  const [contents, setContents] = useState(memo.contents);
  const [updating, setUpdating] = useState(false);
  const { update_memo, delete_memo } = useContext(MemosContext);
  return (
    <div className="flex flex-col rounded border border-[#E9B384] m-2 w-3/5 p-3 bg-[#7C9D96]">
      <div className="flex flex-row justify-between">
        <p className="text-xs text-gray-300">{memo.create_time}</p>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
      <div className="">
        <p className="text-base text-[#EEEEEE]">{contents}</p>
      </div>
      {/* <div>
        {!updating && (
          <>
            <button onClick={() => delete_memo(index)}>Delete</button>
            <button onClick={() => setUpdating(!updating)}>Update</button>
          </>
        )}
      </div>
      <div>
        {updating && (
          <div>
            <button
              onClick={() => {
                update_memo(index, contents);
                setUpdating(!updating);
              }}
            >
              Update
            </button>
            <button onClick={() => setUpdating(!updating)}>Cancel</button>
            <input
              type="text"
              value={contents}
              onChange={(ev) => setContents(ev.target.value)}
            />
          </div>
        )}
        {!updating && <p>{contents}</p>}
      </div> */}
    </div>
  );
}
