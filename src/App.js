import TakeSelfie from "./TakeSelfie/TakeSelfie";
import DragDrop from "./DragDrop/DragDrop";
import UploadFile from "./UploadFile/UploadFile";
import { initializeIcons } from '@fluentui/react/lib/Icons';


function App() {
  initializeIcons(undefined, { disableWarnings: true });
  return (
    <div className="App">
      <DragDrop />
      <TakeSelfie />
      <UploadFile />
    </div>
  );
}

export default App;
