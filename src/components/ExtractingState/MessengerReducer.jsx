// import React from 'react'

export const initialState = {
  selectedId: 0,
  // message: "Hello"
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  }
}

const MessengerReducer = (state, action) => {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        // message: "",
      };
    }
     case "edited_message": {
      return {
        ...state,
        // message: action.message,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
     }
     default: {
      throw Error("Unknown action: " + action.type);
     }
  }
}

export default MessengerReducer
