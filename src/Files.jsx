export default function Files({ files, updating, handle_click }) {
  const localhost = "http://192.168.1.244:5555";
  return (
    <div className="flex flex-row flex-wrap">
      {files.map((file, index) => {
        if (file.type === "mp3") {
          return (
            <audio
              controls
              className="max-h-8"
              src={localhost + file.path}
              key={index}
            ></audio>
          );
        } else if (file.type === "mp4") {
          return (
            <video
              controls
              className="max-h-28"
              src={localhost + file.path}
              key={index}
            ></video>
          );
        } else if (
          file.type === "png" ||
          file.type === "jpg" ||
          file.type === "jpeg"
        ) {
          return (
            <img
              className="max-h-28 m-1"
              src={localhost + file.path}
              key={index}
              onClick={(e) => {handle_click(e.target.currentSrc)}}
            />
          );
        }
      })}
    </div>
  );
}
