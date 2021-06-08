import { ADD_SGPA, REMOVE_SGPA } from "../context/cgpaContext";

export const addSgpa = (name, credit, sgpa) => {
  return {
    type: ADD_SGPA,
    payload: {
      id: new Date().getTime().toLocaleString(),
      name: name,
      credit: credit,
      sgpa: sgpa,
    },
  };
};

export const deleteSgpa = (id) => {
  return {
    type: REMOVE_SGPA,
    id,
  };
};