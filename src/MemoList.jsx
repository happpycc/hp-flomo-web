import { useContext } from "react";
import MemoItem from "./MemoItem";
import MemosContext from "./MemosContext";

export default function MemoList({}) {
  const { memos } = useContext(MemosContext);
  return (
    <>
      {memos.map((memo, index) => {
        return <MemoItem index={index} memo={memo} key={memo._id} />;
      })}
    </>
  );
}
