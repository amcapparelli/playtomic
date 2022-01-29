import React from 'react';

const useForm = (props: Object): [Object, Function] => {
  const [form, setForm] = React.useState<Object>(props);
  const setFormValues = (
    name: string,
    value: string,
  ): void => setForm({ ...form, [name]: value });
  return [form, setFormValues];
};

export default useForm;
