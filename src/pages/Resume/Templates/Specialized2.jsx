import Markdown from 'react-markdown';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiSolidPhone } from 'react-icons/bi';
import { useResume } from '../../../contexts/ResumeContext';
import { useTemplateOrder } from '../../../contexts/TemplateOrderContext';
import SortableList from './Sortable/SortableList';
import { useEffect, useState } from 'react';

const Specialized1 = () => {

  const { resumePreviewData, resumeData, getFontSizeClass, getLineHeightClass, getPageMarginClass, getHeadingFontSizeClass, getTitleCaseClass } = useResume();

  const transformResumeData = (data) => {
    const transformSection = (section) => {
      return section.map((item) => {
        return item.reduce((acc, curr) => {
          const keysList = curr.key.split("-");
          const keysListLength = keysList.length;
          acc[keysList[keysListLength - 2]] = curr.value;
          return acc;
        }, {});
      });
    };

    const transformedData = {
      personalInfo: data.personalInfo[0].reduce((acc, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {}),
      profilePic: data.profilePic,
      technicalSkills: data.technicalSkills.map(skill => ({ skill: skill[0].value })),
      certifications: transformSection(data.certifications),
      extraCurricularActivities: transformSection(data.extraCurricularActivities),
      internships: transformSection(data.internships),
      summerTraining: transformSection(data.summerTraining),
      projects: transformSection(data.projects),
      achievements: transformSection(data.achievements),
      education: transformSection(data.education),
      visibility: data.visibility,
      settings: data.settings
    };

    return transformedData;
  };

  const SummerTraining = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.summerTraining.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${formData.visibility.summerTraining ? "" : "hidden"
            } `}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()}`}
          >
            Summer Training
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.summerTraining.map((training, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()} `}
            >
              <div className={`flex justify-between`}>
                <p className={`font-semibold ${getHeadingFontSizeClass()}`}>
                  {training.title}
                </p>
                <p>{training.date}</p>
              </div>
              <div className={``}>
                <span>{training.organization}</span>{" "}
                {training.location && <span>|</span>}{" "}
                <span>{training.location}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {training.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Internships = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.internships.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${formData.visibility.internships ? "" : "hidden"
            }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Internships
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.internships.map((internship, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {internship.company}
                </p>
                <p className=" ">{internship.date}</p>
              </div>
              <div className={``}>
                <span>{internship.position}</span>{" "}
                {internship.location && <span>|</span>}{" "}
                <span>{internship.location}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {internship.experience}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Projects = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.projects.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${formData.visibility.projects ? "" : "hidden"
            }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Projects
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.projects.map((project, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {project.title}
                </p>
                <p className=" ">{project.date}</p>
              </div>
              <div className={``}>
                <span>{project.domain}</span>{" "}
                {project.technologies && <span>|</span>}{" "}
                <span>{project.technologies}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {project.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Achievements = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.achievements.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()}  ${formData.visibility.achievements ? "" : "hidden"
            }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Achievements
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.achievements.map((achievement, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {achievement.title}
                </p>
                <p className=" ">{achievement.date}</p>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {achievement.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Certifications = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.certifications.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()}  ${formData.visibility.certifications ? "" : "hidden"
            }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()} `}
          >
            Certification
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.certifications.map((certification, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {certification.title}
                </p>
                <p className=" ">{certification.date}</p>
              </div>
              <div className={``}>
                <span>{certification.issuedBy}</span>{" "}
                {certification.link && <span>|</span>}{" "}
                {certification.link && (
                  <a href={certification.link} target="_blank" rel="noreferrer">
                    Certificate Link
                  </a>
                )}
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {certification.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Skills = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.technicalSkills.length > 0 && (
        <div className={`mt-4 flex flex-col w-full ${getLineHeightClass()} `}>
          <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Skills</p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          <div className={`flex flex-wrap gap-2`}>
            {formData.technicalSkills.map((skill, index) => (
              <span key={index} className={`bg-gray-200 px-2 py-1 rounded-md ${getFontSizeClass()}`}>{skill.skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );


  const Education = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.education.length > 0 && (
        <div className={`mt-4 flex flex-col w-full ${getLineHeightClass()} `}>
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Education
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.education.map((education, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {education.degree}
                </p>
                <p className=" ">{education.date}</p>
              </div>
              <div className={`flex justify-between gap-4`}>
                <div>
                  <span>{education.institute}</span>{" "}
                  {education.location && <span>|</span>}{" "}
                  <span>{education.location}</span>
                </div>
                <div>
                  <span>{education.scoreType}</span>{" "}
                  {education.score && <span>|</span>}{" "}
                  <span>{education.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  const [formData, setFormData] = useState(resumePreviewData);
  const { templateOrder, updateTemplateOrder } = useTemplateOrder();

  useEffect(() => {
    setFormData(transformResumeData(resumeData));
  }, [resumeData])


  const ComponentMappings = {
    Education: <Education />,
    Skills: <Skills />,
    Projects: <Projects />,
    Internships: <Internships />,
    SummerTraining: <SummerTraining />,
    Achievements: <Achievements />,
    Certifications: <Certifications />,
  };

  const templateItems = templateOrder.template2.map((item) => ({
    id: item.id.toString(),
    component: ComponentMappings[item.component],
    key: item.component,
  }))

  const onSortTemplateItems = ({ oldIndex, newIndex }) => {
    const newTemplateItems = [...templateItems];
    const [removed] = newTemplateItems.splice(oldIndex - 1, 1);
    newTemplateItems.splice(newIndex - 1, 0, removed);
    updateTemplateOrder({
      template2: newTemplateItems.map((item, index) => ({
        id: index + 1,
        component: item.key,
      })),
    });

    document.body.style.cursor = "auto";
  };



  if (!resumeData) return null;

  return (
    <div id='specialized1'>
      <div className={`flex flex-col h-full ${getPageMarginClass()}`}>

        {/* Personal Details */}
        <div className={`flex flex-col items-center  ${getLineHeightClass()}`}>
          <h1 className={`text-3xl font-bold uppercase`}>{formData.personalInfo.name}</h1>
          <p className={`font-medium ${getFontSizeClass()}`}>{formData.personalInfo.address}</p>
          <div className="flex gap-x-2 gap-y-1 flex-row flex-wrap justify-center">
            <p className={`${getFontSizeClass()} flex items-center gap-1`}>
              {formData.personalInfo.phone && <span className="font-medium -mt-[4px]"><BiSolidPhone className={`${getFontSizeClass()}`} /></span>}
              <a href={`tel:${formData.personalInfo.phone}`}>{formData.personalInfo.phone}</a>
            </p>
            <p className={`${getFontSizeClass()} flex items-center gap-1`}>
              {formData.personalInfo.email && <span className="font-medium -mt-[4px] "><BiLogoGmail className={`${getFontSizeClass()}`} /></span>}
              {/* whennnnn i click on this it needs to open the mail */}
              <a href={`mailto:${formData.personalInfo.email}`}>{formData.personalInfo.email}</a>
            </p>

            <p className={`${getFontSizeClass()} flex items-center gap-1`}>
              {formData.personalInfo.linkedin && <span className="font-medium -mt-[4px] "><BiLogoLinkedinSquare className={`${getFontSizeClass()}`} /></span>}
              <a href={formData.personalInfo.linkedin} target="_blank" rel="noreferrer">{formData.personalInfo.linkedin}</a>
            </p>

            <p className={`${getFontSizeClass()} flex items-center gap-1`}>
              {formData.personalInfo.github && <span className="font-medium -mt-[4px] "><BiLogoGithub className={`${getFontSizeClass()}`} /></span>}
              <a href={formData.personalInfo.github} target="_blank" rel="noreferrer">{formData.personalInfo.github}</a>
            </p>

          </div>
        </div>

        <div className='select-none'>
          <SortableList templateItems={templateItems} onSortTemplateItems={(oldIndex, newIndex) => onSortTemplateItems({ oldIndex, newIndex })} />
        </div>
      </div >
    </div >
  );
};

export default Specialized1;
