import React from 'react';

const useFetch = (): [any, Function, boolean] => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [responseJSON, setResponse] = React.useState<Response | unknown>({
    success: undefined
  });
  const asyncRequest = async (url: string, method: string, body: object): Promise<void> => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        body: JSON.stringify({ ...body }),
        headers: {
          'Content-Type': 'application/json',
          // 'access-token': user.token,
        },
      });
      const resJSON = await res.json();
      setResponse(resJSON);
    } catch (error) {
      setResponse(error);
    } finally {
      setLoading(false);
    }
  };
  return [responseJSON, asyncRequest, loading];
};

export default useFetch;
