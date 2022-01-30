import React from 'react';
import { requestMethods } from '../constants/requestMethods';
import { useDispatch } from 'react-redux'

const useFetchAndDispatch = (): [Function, boolean] => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const asyncRequest = async (
    url: string,
    action: Function,
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
      },
    }
    const options: RequestInit = method === requestMethods.GET
      ? defaultOptions
      : { ...defaultOptions, body: JSON.stringify({ ...body }) }

    try {
      setLoading(true);
      const res = await fetch(url, options);
      const resJSON = await res.json();
      dispatch(action(resJSON));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return [asyncRequest, loading];
};

export default useFetchAndDispatch;
