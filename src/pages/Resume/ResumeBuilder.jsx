/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import InputForm from "./InputForm";
import ResumePreview from "./ResumePreview";
import { ArrowDown2 } from "iconsax-react";
import { useLocalStorage } from "../../hooks";

const ResumeBuilder = () => {

  const [activeTabResume, setActiveTab] = useLocalStorage('activeTabResume', 'personal-info');

  const tabsData = [
    {
      key: 'personal-info',
      name: 'Personal Info',
    },
    {
      key: 'education',
      name: 'Education',
    },
    {
      key: 'experience',
      name: 'Experience',
    },
    {
      key: 'skills',
      name: 'Skills',
    },
    {
      key: 'projects',
      name: 'Projects',
    },
    {
      key: 'certifications',
      name: 'Certifications',
    },
  ];

  const formData = {
    'personal-info': [
      [{
        label: 'Name',
        type: 'name',
        key: 'name',
      },
      {
        key: 'email',
        label: 'Email',
        type: 'email'
      },
      {
        key: 'phone',
        label: 'Phone',
        type: 'phone'
      },
      {
        key: 'address',
        label: 'Address',
        type: 'address'
      },
      {
        key: 'objective',
        label: 'Objective',
        type: 'textarea'
      }
      ]
    ],
    'education': [
      [{
        key: 'institution',
        label: 'Institution',
        type: 'text'
      },
      {
        key: 'degree',
        label: 'Degree',
        type: 'text'
      },
      {
        key: 'education-start-date',
        label: 'Start Date',
        type: 'date'
      },
      {
        key: 'education-end-date',
        label: 'End Date',
        type: 'date'
      },
      {
        key: 'education-description',
        label: 'Description',
        type: 'textarea'
      }
      ]
    ],
    'experience': [
      [{
        key: 'company',
        label: 'Company',
        type: 'text'
      },
      {
        key: 'company-position',
        label: 'Position',
        type: 'text'
      },
      {
        key: 'company-start-date',
        label: 'Start Date',
        type: 'date'
      },
      {
        key: 'company-end-date',
        label: 'End Date',
        type: 'date'
      },
      {
        key: 'company-description',
        label: 'Description',
        type: 'textarea'
      }]
    ],
    'skills': [
      [{
        key: 'skill',
        label: 'Skill',
        type: 'text'
      }]
    ],
    'projects': [
      [{
        key: 'project',
        label: 'Project',
        type: 'text'
      },
      {
        key: 'project-description',
        label: 'Description',
        type: 'textarea'
      }]
    ],
    'certifications': [
      [{
        key: 'certification',
        label: 'Certification',
        type: 'text'
      },
      {
        key: 'certification-institution',
        label: 'Institution',
        type: 'text'
      },
      {
        key: 'certification-date',
        label: 'Date',
        type: 'date'
      }
      ]
    ]
  }

  const optionsTrue = {
    add: true,
    remove: true,
    reset: true,
  };

  const optionsFalse = {
    add: false,
    remove: false,
    reset: true,
  };

  const addRemoveOptions = {
    'personal-info': optionsFalse,
    'education': optionsTrue,
    'experience': optionsTrue,
    'skills': optionsTrue,
    'projects': optionsTrue,
    'certifications': optionsTrue,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-2">
          <Dropdown tabsData={tabsData} activeTabResume={activeTabResume} setActiveTab={setActiveTab} />
          <InputForm data={formData[activeTabResume]} options={addRemoveOptions[activeTabResume]} activeTabResume={activeTabResume} />
        </div>
        <div className="md:col-span-2 p-2">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ tabsData, activeTabResume, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-bgSecondary text-textPrimary px-4 py-2 rounded-lg flex items-center justify-between w-full "
        onClick={() => setIsOpen(!isOpen)}
      >
        {tabsData.find(tab => tab.key === activeTabResume).name}
        <ArrowDown2 className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 flex flex-col gap-2 py-2">
          {tabsData.map((tab) => (
            <button
              key={tab.key}
              className={`block box-border flex-1 text-left px-4 py-2 rounded-lg mx-2 hover:bg-bgHover ${activeTabResume === tab.key ? 'bg-bgActive' : ''}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


export default ResumeBuilder;
