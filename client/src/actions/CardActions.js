import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createNewCard (title, listId, callback) {
  const payload = {
    card: { title, },
    listId,
  };

  // Why does function take dispatch? Why don't include dispatch?
  // Redux Thunk returns a new function that takes the old dispatch from the redux library as a parameter
  // Dispatch in lines 14 and 19 are the same
  // Dispatch from Redux Thunk is in the component
  return function(dispatch) {
    apiClient.createNewCard(payload, response => {
      dispatch(createCardSuccess(response));
      if (callback) {
        callback();
      }
    });
  }
}

export function createCardSuccess(response) {
  return { type: "ADD_NEW_CARD_SUCCESS", card: response.card };
}

export function getCard(cardId, setCard, callback) {
  return function(dispatch) {
    apiClient.getCard(cardId, response => {
      const card = response.card
      dispatch(getCardSuccess(card));
      setCard(card)
      if (callback) {
        callback();
      }
    });
  }
}

export function getCardSuccess(card) {
  return { type: "GET_NEW_CARD_SUCCESS", card, }
}

export function updateCard(cardId, dataToUpdate) {
  const updateObject = {
    card: dataToUpdate
  }

  return function (dispatch) {
    apiClient.updateCard(cardId, updateObject, cardResponse => {
      dispatch(updateCardSuccess(cardResponse))
    })
  }
}

export function updateCardSuccess(cardResponse) {
  return { type: "UPDATE_CARD_SUCCESS", card: cardResponse}
}