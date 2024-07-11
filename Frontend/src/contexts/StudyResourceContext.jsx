/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const StudyResourceContext = createContext();

export const useStudyResources = () => {
  return useContext(StudyResourceContext);
};

export const StudyResourcesProvider = ({ children }) => {
  const [resources] = useState([
    {
      name: "Document",
      data: [
        {
          title: "Document 1",
          id: "3d23fged32",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description:
            "Description jhjjkjjsssssssssssssssssssssssssssssssssssssssssssssss of document 1",
          type: "Document",
          pages: 10,
          date: "2023-06-01",
        },
        {
          title: "Document 2",
          id: "lkjhgt6798",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of document 2",
          type: "Document",
          pages: 20,
          date: "2023-06-02",
        },
        {
          title: "Document 3",
          id: "gfgho876gh",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of document 3",
          type: "Document",
          pages: 30,
          date: "2023-06-03",
        },
      ],
    },
    {
      name: "Ebook",
      data: [
        {
          title: "Ebook 1",
          id: "567uhgfty7",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of ebook 1",
          type: "Ebook",
          pages: 100,
          date: "2023-06-04",
        },
        {
          title: "Ebook 2",
          id: "uy887trghj",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of ebook 2",
          type: "Ebook",
          pages: 200,
          date: "2023-06-05",
        },
        {
          title: "Ebook 3",
          id: "876rfghjio",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of ebook 3",
          type: "Ebook",
          pages: 300,
          date: "2023-06-06",
        },
      ],
    },
    {
      name: "Note",
      data: [
        {
          title: "Note 1",
          id: "oiu8ijjki8",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of note 1",
          type: "Note",
          pages: 5,
          date: "2023-06-07",
        },
        {
          title: "Note 2",
          id: "0987tgbnsd",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of note 2",
          type: "Note",
          pages: 6,
          date: "2023-06-08",
        },
        {
          title: "Note 3",
          id: "9876rfghjk",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of note 3",
          type: "Note",
          pages: 7,
          date: "2023-06-09",
        },
      ],
    },
    {
      name: "Video",
      data: [
        {
          title: "Video 1",
          id: "98765rfghd",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of video 1",
          type: "Video",
          pages: 0,
          date: "2023-06-10",
        },
        {
          title: "Video 2",
          id: "09876trfgh",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of video 2",
          type: "Video",
          pages: 0,
          date: "2023-06-11",
        },
        {
          title: "Video 3",
          id: "jhgf78jbdd",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of video 3",
          type: "Video",
          pages: 0,
          date: "2023-06-12",
        },
      ],
    },
    {
      name: "Slide",
      data: [
        {
          title: "Slide 1",
          id: "uyyghjbhji",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of slide 1",
          type: "Slide",
          pages: 15,
          date: "2023-06-13",
        },
        {
          title: "Slide 2",
          id: "987tghj890",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of slide 2",
          type: "Slide",
          pages: 25,
          date: "2023-06-14",
        },
        {
          title: "Slide 3",
          id: "ihgt78ijsa",
          thumbnailUrl:
            "https://imgv2-1-f.scribdassets.com/img/document/458825430/149x198/ef6d7b85d0/1710534250?v=1",
          description: "Description of slide 3",
          type: "Slide",
          pages: 35,
          date: "2023-06-15",
        },
      ],
    },
  ]);

  return (
    <StudyResourceContext.Provider value={{ resources }}>
      {children}
    </StudyResourceContext.Provider>
  );
};
