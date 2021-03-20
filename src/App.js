import TakeSelfie from "./TakeSelfie/TakeSelfie";
import DragDrop from "./DragDrop/DragDrop";
import UploadFile from "./UploadFile/UploadFile";
function App() {
  return (
    <div className="App">
      <DragDrop />
      <TakeSelfie />
      <UploadFile />
    </div>
  );
}

export default App;
