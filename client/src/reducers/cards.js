export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = []
      action.board.lists.forEach(list => list.cards.forEach(card => {
        cards.push(card)
      }))
      return cards
    }
    case "ADD_NEW_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    case "GET_NEW_CARD_SUCCESS": {
      return [action.card];
    }
    case "UPDATE_CARD_SUCCESS": {
      return state.map(card => {
        if (card._id == action.card._id) {
          card = action.card
        }
        return card
      })
    }
    default:
      return state;
  }
}