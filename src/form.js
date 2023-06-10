import React from 'react';
import customForm from '../src/custom-hook';

const Form = () => {
  const { register, handleSubmit, getAvailableApis } = customForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleApiClick = () => {
    const apis = getAvailableApis();
    console.log(apis);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('example')} />
      <button type="submit">Submit</button>

      <button onClick={handleApiClick}>Get Available APIs</button>
    </form>
  );
};

export default Form;
