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

  const data = [
    [
      {
        label: 'Name',
        type: 'name',
      },
      {
        label: 'Email',
        type: 'email',
      },
      {
        label: 'Phone',
        type: 'phone',
      },
      {
        label: 'Address',
        type: 'address',
      },
      {
        label: 'Objective',
        type: 'textarea',
      }
    ]
  ];

  const formData = {
    'personal-info': [
      [{
        label: 'Name',
        type: 'name'
      },
      {
        label: 'Email',
        type: 'email'
      },
      {
        label: 'Phone',
        type: 'phone'
      },
      {
        label: 'Address',
        type: 'address'
      },
      {
        label: 'Objective',
        type: 'textarea'
      }
      ]
    ],
    'education': [
      [{
        label: 'Institution',
        type: 'text'
      },
      {
        label: 'Degree',
        type: 'text'
      },
      {
        label: 'Start Date',
        type: 'date'
      },
      {
        label: 'End Date',
        type: 'date'
      },
      {
        label: 'Description',
        type: 'textarea'
      }
      ]
    ],
    'experience': [
      [{
        label: 'Company',
        type: 'text'
      },
      {
        label: 'Position',
        type: 'text'
      },
      {
        label: 'Start Date',
        type: 'date'
      },
      {
        label: 'End Date',
        type: 'date'
      },
      {
        label: 'Description',
        type: 'textarea'
      }]
    ],
    'skills': [
      {
        label: 'Skill',
        type: 'text'
      }
    ],
    'projects': [
      {
        label: 'Project',
        type: 'text'
      },
      {
        label: 'Description',
        type: 'textarea'
      }
    ],
    'certifications': [
      {
        label: 'Certification',
        type: 'text'
      },
      {
        label: 'Institution',
        type: 'text'
      },
      {
        label: 'Date',
        type: 'date'
      }
    ]
  }

  const options = {
    add: true,
    remove: true,
    reset: true,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-2">
          <Dropdown tabsData={tabsData} activeTabResume={activeTabResume} setActiveTab={setActiveTab} />
          <InputForm data={formData[activeTabResume]} options={options} activeTabResume={activeTabResume} />
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
