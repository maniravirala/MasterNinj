import { useState } from "react";
// import { Slider } from "@nextui-org/slider";
import Slider from "../../../components/Slider";
import Card from "./Card";
import { useResume } from "../../../contexts/ResumeContext";

const SettingsModal = ({ modalOpen, setModalOpen }) => {
  const [isOpen, setIsOpen] = useState(modalOpen==='settings');

  const { state, handleSettings } = useResume();

  const handleOpen = () => {
    setIsOpen(true);
    setModalOpen('settings');
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalOpen('');
  };

  const settings = state.settings;


  return (
    <>
      <Card
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <h1 className="text-2xl font-medium">Settings</h1>
        <div className="mt-4 flex w-80 flex-col gap-4 sm:w-96 md:w-96 lg:w-96">
          <Slider label="Font Size" min={10} max={30} initialValue={settings.fontSize} className="max-w-md" onChange={(value) => handleSettings("fontSize", value)} />
          <Slider label="Line Height" min={0} max={20} initialValue={settings.lineHeight} className="max-w-md" onChange={(value) => handleSettings("lineHeight", value)} />
          <Slider label="Page Margins" min={10} max={40} initialValue={settings.pageMargins} className="max-w-md" onChange={(value) => handleSettings("pageMargins", value)} />

          <div className="flex flex-col gap-4">
            <label htmlFor="fontFamily" className="mb-1 block">Font Family</label>
            <select id="fontFamily" value={settings.fontFamily} onChange={(e) => handleSettings("fontFamily", e.target.value)} className="w-full rounded-md border border-gray-300 p-2">
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Poppins">Poppins</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="titleCase" className="mb-1 block">Title Case</label>
            <select id="titleCase" value={settings.titleCase} onChange={(e) => handleSettings("titleCase", e.target.value)} className="w-full rounded-md border border-gray-300 p-2">
              <option value="Uppercase">Uppercase</option>
              <option value="Lowercase">Lowercase</option>
              <option value="Capitalize">Capitalize</option>
            </select>
            <label htmlFor="paper" className="mb-1 block">
              Paper
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <select id="paper" value={settings.paper} onChange={(e) => handleSettings("paper", e.target.value)} className="w-full rounded-md border border-gray-300 p-2" >
              <option value="A4">A4</option>
              <option value="Letter">Letter</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
        </div>
      </Card>
      <button
        className="rounded-lg bg-brand-500 px-3 py-2 text-white dark:bg-brand-700"
        onClick={handleOpen}
      >
        Settings
      </button>
    </>
  );
};

export default SettingsModal;
