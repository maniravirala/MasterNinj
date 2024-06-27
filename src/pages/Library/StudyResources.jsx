import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Tabs from '../../components/Tabs';
import ResourcePage from './ResourcePage';
import toast from 'react-hot-toast';

const sampleData = [
  {
    title: 'Introduction to React',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=0MlT74DrG2U',
    time: 1686864000000, // Equivalent to '2023-06-15'
    likes: 120,
    dislikes: 5,
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJEtMjTZY727HRUHi76Du6M7vuPI5eYq9CQ&s', // Sample image URL
  },
  {
    title: 'React Fundamentals',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
    time: 1684598400000, // Equivalent to '2023-05-20'
    likes: 200,
    dislikes: 10,
    pages: 0,
  },
  {
    title: 'React Hooks',
    type: 'document',
    url: 'https://reactjs.org/docs/hooks-intro.html',
    time: 1682371200000, // Equivalent to '2023-04-25'
    likes: 150,
    dislikes: 8,
    pages: 50,
  },
  {
    title: 'React Context',
    type: 'slide',
    url: 'https://www.slideshare.net/rajaraodv/reactive-2018',
    time: 1685577600000, // Equivalent to '2023-06-01'
    likes: 180,
    dislikes: 6,
    pages: 30,
  },
  {
    title: 'React Hooks',
    type: 'document',
    url: 'https://reactjs.org/docs/hooks-intro.html',
    time: 1682371200000, // Equivalent to '2023-04-25'
    likes: 150,
    dislikes: 8,
    pages: 50,
  },
  {
    title: 'React Context',
    type: 'slide',
    url: 'https://www.slideshare.net/rajaraodv/reactive-2018',
    time: 1685577600000, // Equivalent to '2023-06-01'
    likes: 180,
    dislikes: 6,
    pages: 30,
  },
  {
    title: 'React Hooks',
    type: 'document',
    url: 'https://reactjs.org/docs/hooks-intro.html',
    time: 1682371200000, // Equivalent to '2023-04-25'
    likes: 150,
    dislikes: 8,
    pages: 50,
  },
  {
    title: 'React Context',
    type: 'slide',
    url: 'https://www.slideshare.net/rajaraodv/reactive-2018',
    time: 1685577600000, // Equivalent to '2023-06-01'
    likes: 180,
    dislikes: 6,
    pages: 30,
  },
  {
    title: 'React Hooks',
    type: 'document',
    url: 'https://reactjs.org/docs/hooks-intro.html',
    time: 1682371200000, // Equivalent to '2023-04-25'
    likes: 150,
    dislikes: 8,
    pages: 50,
  },
  {
    title: 'React Context',
    type: 'slide',
    url: 'https://www.slideshare.net/rajaraodv/reactive-2018',
    time: 1685577600000, // Equivalent to '2023-06-01'
    likes: 180,
    dislikes: 6,
    pages: 30,
  },
  {
    title: 'React Hooks',
    type: 'document',
    url: 'https://reactjs.org/docs/hooks-intro.html',
    time: 1682371200000, // Equivalent to '2023-04-25'
    likes: 150,
    dislikes: 8,
    pages: 50,
  },
  {
    title: 'React Context',
    type: 'slide',
    url: 'https://www.slideshare.net/rajaraodv/reactive-2018',
    time: 1685577600000, // Equivalent to '2023-06-01'
    likes: 180,
    dislikes: 6,
    pages: 30,
  },
];



const StudyResources = () => {
  const { resourceId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = ['all', 'documents', 'ebook', 'note', 'video', 'slide'];
  const [selectedTab, setSelectedTab] = useState(resourceId || 'all');

  useEffect(() => {
    setLoading(true);
    const loadingToast = toast.loading('Loading resources...');
    setError(null);
    // Mock API call
    setTimeout(() => {
      setData(sampleData);
      toast.dismiss(loadingToast);
      toast.success('Resources loaded successfully!');
      setLoading(false);
    }, 1000);
  }, [resourceId]);

  useEffect(() => {
    if (selectedTab !== resourceId) { 
      navigate(`/study-resources/${selectedTab}`);

    }
  }, [selectedTab, resourceId, navigate]);


  return (
    <div className="study-resources ">
      <div className='pt-10'>
        <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} variant='' />
      </div>

      {error && <p>{error}</p>}
      <ResourcePage data={data} loading={loading} />

    </div>
  );
};

export default StudyResources;
