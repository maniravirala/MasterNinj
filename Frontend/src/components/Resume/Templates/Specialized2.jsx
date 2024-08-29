
const Specialized2 = () => {
  return (
    <div>
      <h1>Specialized2</h1>
    </div>
  );
};

export default Specialized2;


// import Markdown from 'react-markdown';
// import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiSolidPhone } from 'react-icons/bi';
// import { useResume } from '../../../contexts/ResumeContext';
// import { useTemplateOrder } from '../../../contexts/TemplateOrderContext';
// import SortableList from './Sortable/SortableList';

// const Specialized2 = () => {

//   const { resumePreviewData, state, getFontSizeClass, getLineHeightClass, getPageMarginClass, getHeadingFontSizeClass, getTitleCaseClass } = useResume();


//   const formData = resumePreviewData;

//   const { templateOrder, updateTemplateOrder } = useTemplateOrder();

//   const SummerTraining = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.summerTraining.length > 0 && (
//         <div className={`mt-4 flex flex-col w-full ${formData.visibility.summerTraining ? "" : "hidden"} `}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold `}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >Summer Training</p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.summerTraining.map((training, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               {(training.title || training.date) && (
//                 <div className={`flex justify-between`}>
//                   {training.title && <p className={`font-semibold`}
//                     style={{ ...getHeadingFontSizeClass() }}
//                   >{training.title}</p>}
//                   {training.date && <p>{training.date}</p>}
//                 </div>
//               )}
//               {(training.organization || training.location) && (
//                 <div>
//                   {training.organization && <span>{training.organization}</span>}
//                   {training.location && training.organization && <span className='mx-1'>|</span>}
//                   {training.location && <span>{training.location}</span>}
//                 </div>
//               )}
//               {training.description && (
//                 <Markdown className={`break-normal`}>
//                   {training.description}
//                 </Markdown>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const Internships = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.internships.length > 0 && (
//         <div
//           className={`mt-4 flex flex-col w-full ${formData.visibility.internships ? "" : "hidden"}`}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold `}
//             style={{ ...getLineHeightClass(), ...getHeadingFontSizeClass(), ...getTitleCaseClass() }}
//           >
//             Internships
//           </p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.internships.map((internship, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               {(internship.company || internship.date) && (
//                 <div className={`flex justify-between gap-4`}>
//                   {internship.company && <p className={` font-semibold `}
//                     style={{ ...getHeadingFontSizeClass() }}
//                   >{internship.company}</p>}
//                   {internship.date && <p>{internship.date}</p>}
//                 </div>
//               )}
//               {(internship.position || internship.location) && (
//                 <div>
//                   {internship.position && <span>{internship.position}</span>}
//                   {internship.location && internship.position && <span className='mx-1'>|</span>}
//                   {internship.location && <span>{internship.location}</span>}
//                 </div>
//               )}
//               {internship.description && (
//                 <Markdown className={`break-normal`}>
//                   {internship.description}
//                 </Markdown>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const Projects = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.projects.length > 0 && (
//         <div
//           className={`mt-4 flex flex-col w-full ${formData.visibility.projects ? "" : "hidden"}`}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold`}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >
//             Projects
//           </p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.projects.map((project, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               {(project.title || project.date) && (
//                 <div className={`flex justify-between gap-4`}>
//                   {project.title && <p className={` font-semibold `}
//                     style={{ ...getHeadingFontSizeClass() }}
//                   > {project.title} </p>}
//                   {project.date && <p>{project.date}</p>}
//                 </div>
//               )}
//               {(project.domain || project.technologies) && (
//                 <div>
//                   {project.domain && <span>{project.domain}</span>}
//                   {project.technologies && project.domain && <span className='mx-1'>|</span>}
//                   {project.technologies && <span>{project.technologies}</span>}
//                 </div>
//               )}

//               {project.description && (
//                 <Markdown className={`break-normal`}>
//                   {project.description}
//                 </Markdown>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const Achievements = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.achievements.length > 0 && (
//         <div
//           className={`mt-4 flex flex-col w-full ${formData.visibility.achievements ? "" : "hidden"}`}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold`}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >
//             Achievements
//           </p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               <div className={`flex justify-between gap-4`}>
//                 {achievement.title &&
//                   <p className={` font-semibold `}
//                     style={{ ...getHeadingFontSizeClass() }}
//                   >
//                     {achievement.title}
//                   </p>
//                 }
//                 {achievement.date && <p>{achievement.date}</p>}
//               </div>
//               {achievement.description && (
//                 <Markdown className={`break-normal`}>
//                   {achievement.description}
//                 </Markdown>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const Certifications = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.certifications.length > 0 && (
//         <div
//           className={`mt-4 flex flex-col w-full ${formData.visibility.certifications ? "" : "hidden"}`}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p
//             className={`font-bold `}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >
//             Certification
//           </p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.certifications.map((certification, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               {(certification.title || certification.date) && (
//                 <div className={`flex justify-between gap-4`}>
//                   {certification.title && <p className={` font-semibold `}
//                     style={{ ...getHeadingFontSizeClass() }}
//                   >{certification.title}</p>}
//                   {certification.date && <p>{certification.date}</p>}
//                 </div>
//               )}
//               {(certification.issuedBy || certification.link) && (
//                 <div>
//                   {certification.issuedBy && <span>{certification.issuedBy}</span>}
//                   {certification.link && certification.issuedBy && <span className='mx-1'>|</span>}
//                   {certification.link && (
//                     <a href={certification.link} target="_blank" rel="noreferrer">
//                       Certificate Link
//                     </a>
//                   )}
//                 </div>
//               )}
//               {certification.description && (
//                 <Markdown className={`ml-4 break-normal`}>
//                   {certification.description}
//                 </Markdown>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const Skills = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.technicalSkills.length > 0 && (
//         <div className={`mt-4 flex flex-col w-full`}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold `}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >Skills</p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           <div className={`flex flex-wrap gap-2`}>
//             {formData.technicalSkills.map((skill, index) => (
//               <div key={index}>
//                 {(skill.domain || skill.skill) && (
//                   <div className={`px-2 py-1 rounded-md`}>
//                     {skill.domain && <span className='capitalize'>{skill.domain}</span>}
//                     {skill.skill && skill.domain && <span className='mx-1'>:</span>}
//                     {skill.skill && <span>{skill.skill}</span>}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const Education = () => (
//     <div className="w-full m-0 p-0 flex flex-grow">
//       {formData.education.length > 0 && (
//         <div className={`mt-4 flex flex-col w-full `}
//           style={{ ...getLineHeightClass() }}
//         >
//           <p className={`font-bold`}
//             style={{ ...getTitleCaseClass(), ...getHeadingFontSizeClass(), ...getLineHeightClass() }}
//           >
//             Education
//           </p>
//           <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
//           {formData.education.map((education, index) => (
//             <div
//               key={index}
//               className={` flex flex-col `}
//               style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//             >
//               {(education.degree || education.date) && (
//                 <div className={`flex justify-between gap-4`}>
//                   {education.degree &&
//                     <p className={` font-semibold `}
//                       style={{ ...getHeadingFontSizeClass() }}
//                     >{education.degree}</p>
//                   }
//                   {education.date && <p>{education.date}</p>}
//                 </div>
//               )}
//               <div className={`flex justify-between gap-4`}>
//                 {(education.institute || education.location) && (
//                   <div>
//                     {education.institute && <span>{education.institute}</span>}
//                     {education.location && education.institute && <span className='mx-1'>|</span>}
//                     {education.location && <span>{education.location}</span>}
//                   </div>
//                 )}
//                 {(education.scoreType || education.score) && (
//                   <div>
//                     {education.scoreType && <span className='capitalize'>{education.scoreType}</span>}
//                     {education.score && education.scoreType && <span className='mx-1'>|</span>}
//                     {education.score && <span>{education.score}</span>}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )
//       }
//     </div >
//   );


//   const ComponentMappings = {
//     Education: <Education />,
//     Skills: <Skills />,
//     Projects: <Projects />,
//     Internships: <Internships />,
//     SummerTraining: <SummerTraining />,
//     Achievements: <Achievements />,
//     Certifications: <Certifications />,
//   };

//   const templateItems = templateOrder.template2.map((item) => ({
//     id: item.id.toString(),
//     component: ComponentMappings[item.component],
//     key: item.component,
//   }))

//   const onSortTemplateItems = ({ oldIndex, newIndex }) => {
//     const newTemplateItems = [...templateItems];
//     const [removed] = newTemplateItems.splice(oldIndex - 1, 1);
//     newTemplateItems.splice(newIndex - 1, 0, removed);
//     updateTemplateOrder({
//       template2: newTemplateItems.map((item, index) => ({
//         id: index + 1,
//         component: item.key,
//       })),
//     });

//     document.body.style.cursor = "auto";
//   };



//   if (!state) return null;

//   return (
//     <div id='specialized2' className='p-[20px] '>
//       <div className={`flex flex-col h-full`}
//         style={{ ...getPageMarginClass() }}
//       >

//         {/* Personal Details */}
//         {formData.personalInfo.map((personalInfo, index) => (
//           <div key={index}
//             className={`flex flex-col items-center `}
//             style={{ ...getFontSizeClass(), ...getLineHeightClass() }}
//           >
//             {personalInfo.name && <h1 className={`text-3xl font-bold uppercase`}>{personalInfo.name}</h1>}
//             {personalInfo.address && <p className={`font-medium `}>{personalInfo.address}</p>}
//             <div className="flex gap-x-2 gap-y-1 flex-row flex-wrap justify-center">
//               <p className={`flex items-center gap-1`}>
//                 {personalInfo.phone && <span className="font-medium -mt-[4px]"><BiSolidPhone /></span>}
//                 <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
//               </p>
//               <p className={` flex items-center gap-1`}>
//                 {personalInfo.email && <span className="font-medium -mt-[4px] "><BiLogoGmail /></span>}
//                 {/* whennnnn i click on this it needs to open the mail */}
//                 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
//               </p>

//               <p className={` flex items-center gap-1`}>
//                 {personalInfo.linkedin && <span className="font-medium -mt-[4px] "><BiLogoLinkedinSquare /></span>}
//                 <a href={'https://' + personalInfo.linkedin} target="_blank" rel="noreferrer">{personalInfo.linkedin}</a>
//               </p>

//               <p className={` flex items-center gap-1`}>
//                 {personalInfo.github && <span className="font-medium -mt-[4px] "><BiLogoGithub /></span>}
//                 <a href={'https://' + personalInfo.github} target="_blank" rel="noreferrer">{personalInfo.github}</a>
//               </p>

//             </div>
//           </div>
//         ))}

//         <div className='select-none cursor-default'>
//           {templateItems.length > 0 && (
//             <SortableList templateItems={templateItems} onSortTemplateItems={(oldIndex, newIndex) => onSortTemplateItems({ oldIndex, newIndex })} />
//           )}
//         </div>
//       </div >
//     </div >
//   );
// };

// export default Specialized2;
