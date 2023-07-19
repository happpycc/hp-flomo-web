import { useContext, useState } from "react";
import MemosContext from "./MemosContext";
import Files from "./Files";
import OpButton from "./OpButton";

export default function MemoItem({ index, memo }) {
  const [contents, setContents] = useState(memo.contents);
  const [files, setFiles] = useState(memo.files);
  return (
    <div className="flex flex-col rounded border border-[#E9B384] m-2 w-5/6 p-3 bg-[#7C9D96]">
      <div className="flex flex-row justify-between">
        <p className="text-xs text-gray-300">{memo.create_time}</p>
        <OpButton index={index} />
      </div>
      {contents && (
        <div className="">
          <p className="text-base text-[#EEEEEE]">{contents}</p>
        </div>
      )}
      {files.length !== 0 && <Files files={files} />}
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
