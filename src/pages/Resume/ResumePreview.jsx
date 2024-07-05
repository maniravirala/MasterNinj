import { useResume } from "../../contexts/ResumeContext";
import { useLocalStorage } from "../../hooks";
import { Specialized1, Specialized2, Specialized3 } from "./Templates";
import TemplatesSelectionModal from "./Modals/TemplatesSelectionModal";
import SettingsModal from "./Modals/SettingsModal";

const ResumePreview = () => {
  const { getFontFamilyClass, getPaperClass } = useResume();

  const tabsData = [
    { label: "Specialized1", component: <Specialized1 /> },
    { label: "Specialized2", component: <Specialized2 /> },
    { label: "Specialized3", component: <Specialized3 /> },
  ];

  const [selectedTemplate, setSelectedTemplate] = useLocalStorage(
    "selectedTemplate",
    "Specialized1",
  );

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <TemplatesSelectionModal
          tabsData={tabsData}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <SettingsModal />
      </div>

      <div
        id="resumePreview"
        className={`bg-slate-100 text-black ${getPaperClass()}`}
        style={{ margin: "0 auto", fontFamily: `${getFontFamilyClass()}` }}
      >
        {tabsData.find((tab) => tab.label === selectedTemplate)?.component}
      </div>
    </>
  );
};

export default ResumePreview;
