import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

const createNewCard = (title, listId, callback) => {
  const payload = {
    card: { title, },
    listId,
  };

  return function(dispatch) {
    apiClient.createNewCard(payload, response => {
      console.log(response);

      const cardId = response._id;

      if (callback) {
        callback();
      }
    });
  }
}