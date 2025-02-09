import { FC, HTMLInputTypeAttribute } from "react";
import CustomButton from "./CustomButton";

interface FilePickerProps {
  file: any;
  setFile: (value: string) => void;
  readFile: (type: string) => void;
}

const FilePicker: FC<FilePickerProps> = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e: any) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-xs text-gray-500 truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
