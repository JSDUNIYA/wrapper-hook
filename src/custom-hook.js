import { useForm } from 'react-hook-form';

const useCustomForm = () => {
  
  const hookFormMethods = useForm();
  
  const getAvailableApis = () => {
    // Retrieve all API names from the `hookFormMethods` object
    const apiNames = Object.keys(hookFormMethods);
    
    // Filter out non-API properties
    const apis = apiNames.filter(name => typeof hookFormMethods[name] === 'function');
    
    return apis;
  };
  
  return {
    ...hookFormMethods,
    getAvailableApis
  };
};

export default useCustomForm;
