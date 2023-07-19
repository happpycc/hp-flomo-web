import { useState } from "react";
import Files from "./Files";
import DefaultBtn from "./DefaultBtn";
import UpdatingBtn from "./UpdatingBtn";
import { useContext } from "react";
import MemosContext from "./MemosContext";

export default function MemoItem({ index, memo }) {
  const [updating, setUpdating] = useState(false);
  const [contents, setContents] = useState(memo.contents);
  const { update_memo } = useContext(MemosContext);
  const [files, setFiles] = useState(memo.files);
  function handle_update() {
    setUpdating(!updating);
    update_memo(index, contents);
  }
  function handle_click(path) {
    // console.log(e);
  }
  return (
    <div className="flex flex-col rounded border border-[#E9B384] m-2 w-5/6 p-3 bg-[#7C9D96]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xs text-gray-300">{memo.create_time}</p>
        {!updating && (
          <DefaultBtn
            index={index}
            updating={updating}
            setUpdating={setUpdating}
          />
        )}
        {updating && (
          <UpdatingBtn
            handle_update={handle_update}
            updating={updating}
            setUpdating={setUpdating}
          />
        )}
      </div>
      {(contents || updating) && (
        <div>
          {!updating && <p className="text-base text-[#EEEEEE]">{contents}</p>}
          {updating && (
            <textarea
              className="w-full bg-transparent resize-none border rounded p-2"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            ></textarea>
          )}
        </div>
      )}
      {files && files.length !== 0 && (
        <Files files={files} updating={updating} handle_click={handle_click} />
      )}
    </div>
  );
}
