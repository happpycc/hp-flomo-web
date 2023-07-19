import { useEffect, useState } from "react";
import axios from "axios";

import NewMemoForm from "./NewMemoForm";
import MemoList from "./MemoList";
import MemosContext from "./MemosContext";

export default function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.244:5555/api/memos").then((res) => {
      setMemos(res.data || []);
    });
  }, []);

  function post_memo(fd) {
    axios
      .post("http://192.168.1.244:5555/api/memos", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        res.status === 200 &&
          setMemos((oldMemos) => {
            return [res.data, ...oldMemos]; //id, update_time, create_time
          });
      })
      .catch((err) => alert(err));
  }
  function delete_memo(index) {
    axios
      .delete(`http://192.168.1.244:5555/api/memos/${memos[index]._id}`)
      .then((res) => {
        res.status === 200 &&
          setMemos((oldMemos) => {
            return oldMemos.filter((_, _index) => index !== _index);
          });
      })
      .catch((err) => alert(err));
  }
  function update_memo(index, newContents) {
    axios
      .post(`http://192.168.1.244:5555/api/memos/${memos[index]._id}`, {
        contents: newContents,
      })
      .then((res) => {
        res.status === 200 &&
          setMemos((oldMemos) => {
            const newMemos = [...oldMemos];
            newMemos[index].contents = newContents;
            return newMemos;
          });
      });
  }
  return (
    <div className="flex flex-col h-screen bg-[#2C3333]">
      <hr />
      <div className="flex flex-col flex-auto items-center overflow-y-scroll h-2/3 m-3 no-scrollbar">
        <MemosContext.Provider value={{ memos, delete_memo, update_memo }}>
          <MemoList />
        </MemosContext.Provider>
      </div>
      <div className="flex flex-col justify-center h-1/3 mx-3 items-center">
        <NewMemoForm post_memo={post_memo} />
      </div>
    </div>
  );
}
