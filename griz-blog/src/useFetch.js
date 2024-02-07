import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
        .then(response => {
          if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted.');
          } else {
            setData(null);
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;