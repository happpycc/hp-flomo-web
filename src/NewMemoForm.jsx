import { useRef, useState } from "react";

export default function NewMemoForm({ post_memo }) {
  const [contents, setContents] = useState("");
  const [files, setFiles] = useState([]);
  const inputFile = useRef(null);
  const handle_post = () => {
    if (contents.trim() === "" && files.length === 0) {
      return alert("all null");
    }
    const fd = new FormData();
    if (contents.trim() !== "") {
      fd.append("contents", contents);
    }
    if (files.length !== 0) {
      for (let i = 0; i < files.length; i++) {
        fd.append("files", files[i]);
      }
    }
    post_memo(fd);
    setContents("")
    setFiles([])
  };
  return (
    <>
      <div className="flex flex-col w-3/5 h-full m-2 border rounded border-[#E9B384] bg-[#2E4F4F]">
        <textarea
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          className="h-3/4 bg-transparent resize-none outline-none m-2 no-scrollbar"
          placeholder="Write something ..."
        ></textarea>

        <div className="flex flex-row justify-between h-1/4 border-t bg-[#526D82]">
          <div
            onClick={() => {
              inputFile.current.click();
            }}
            className="flex flex-row items-center border-r px-2"
          >
            <span>
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
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            </span>
            <span className="mx-2">
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
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <span>
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
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
          </div>
          <div className="flex w-full flex-row justify-start overflow-x-auto no-scrollbar">
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
            <div className="border m-1">fsadf</div>
          </div>
          <div className="flex items-center border-l pl-4 mx-2 p-2">
            <input
              type="file"
              ref={inputFile}
              onChange={(e) =>
                setFiles((oldFiles) => {
                  return [...oldFiles, ...e.target.files];
                })
              }
              hidden
              multiple
            />
            <button
              className="bg-blue-600 rounded px-2 w-full h-full"
              onClick={() => handle_post()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
