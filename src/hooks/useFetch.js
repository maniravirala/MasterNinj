import { useState, useEffect, useRef } from "react";
import axios from "axios";

function useFetch(requestConfig) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cancelRequest = useRef(null);

  useEffect(() => {
    if (!requestConfig || !requestConfig.url) return;

    const source = axios.CancelToken.source();
    cancelRequest.current = source.cancel;

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const response = await axios({
          ...requestConfig,
          cancelToken: source.token,
        });
        setLoading(false);
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setLoading(false);
          setError("An error occurred. Awkward..");
        }
      }
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [requestConfig]);

  return {
    data,
    loading,
    error,
    cancel: () => cancelRequest.current && cancelRequest.current(),
  };
}

export default useFetch;
