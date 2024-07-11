import { useResume } from "../../contexts/ResumeContext";

const ResumePreview = ({tabsData, selectedTemplate}) => {
  const { getFontFamilyClass, getPaperClass } = useResume();

  return (
    <>
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
