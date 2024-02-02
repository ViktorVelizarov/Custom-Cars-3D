import { createContext, useState, useContext } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("null");

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
