import React from 'react';
import { requestMethods } from '../constants/requestMethods';

const useFetch = (): [any, Function, boolean] => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [responseJSON, setResponse] = React.useState<Response | unknown>({
    success: undefined
  });
  const asyncRequest = async (
    url: string,
    body: Object = {},
    method: string = requestMethods.GET,
  ): Promise<void> => {
    const defaultOptions: RequestInit = {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // 'access-token': user.token,
      },
    }
    const options: RequestInit = method === requestMethods.GET
      ? defaultOptions
      : { ...defaultOptions, body: JSON.stringify({ ...body }) }

    try {
      setLoading(true);
      const res = await fetch(url, options);
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
