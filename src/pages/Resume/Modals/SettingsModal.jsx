/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slider } from "@nextui-org/slider";
import Card from "./Card";
import { useResume } from "../../../contexts/ResumeContext";

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { resumeData, handleSettings } = useResume();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const settings = resumeData.settings;

  return (
    <>
      <Card
        isOpen={isOpen}
        handleClose={handleClose}
        handleBackgroundClick={handleBackgroundClick}
      >
        <h1 className="text-2xl font-medium">Settings</h1>
        <div className="mt-4 flex w-80 flex-col gap-4 sm:w-96 md:w-96 lg:w-96">
          <Slider
            label="Font Size"
            minValue={10}
            maxValue={30}
            defaultValue={settings.fontSize}
            className="max-w-md"
          />
          <Slider
            label="Line Height"
            minValue={0}
            maxValue={20}
            defaultValue={settings.lineHeight}
            className="max-w-md"
          />
          <Slider
            label="Page Margins"
            minValue={10}
            maxValue={40}
            defaultValue={settings.pageMargins}
            className="max-w-md"
          />
          <label htmlFor="fontFamily" className="mb-1 block">
            Font Family
          </label>
          <select
            id="fontFamily"
            value={settings.fontFamily}
            onChange={(e) => handleSettings("fontFamily", e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
          <label htmlFor="titleCase" className="mb-1 block">
            Title Case
          </label>
          <select
            id="titleCase"
            value={settings.titleCase}
            onChange={(e) => handleSettings("titleCase", e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
          <label htmlFor="paper" className="mb-1 block">
            Paper
          </label>
          <select
            id="paper"
            value={settings.paper}
            onChange={(e) => handleSettings("paper", e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="A4">A4</option>
            <option value="Letter">Letter</option>
            <option value="Legal">Legal</option>
          </select>
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
