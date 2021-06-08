import { ADD_SGPA, REMOVE_SGPA } from "../context/cgpaContext";

const initialState = {
  list: [],
};

const addSgpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SGPA:
      const { id, name, credit, sgpa } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: name,
            credit: credit,
            sgpa: sgpa,
          },
        ],
      };

    case REMOVE_SGPA:
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default addSgpaReducer;
