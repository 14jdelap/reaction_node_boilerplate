export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = []
      action.board.lists.forEach(list => list.cards.forEach(card => {
        const {comments, ...cardWithoutComments} = card;
        cards.push(cardWithoutComments)
      }))
      return cards
    }
    case "ADD_NEW_CARD_SUCCESS": {
      const {comments, ...cardWithoutComments} = action.card
      return state.concat(cardWithoutComments);
    }
    case "GET_NEW_CARD_SUCCESS": {
      const {comments, ...cardWithoutComments} = action.card
      return [cardWithoutComments];
    }
    case "UPDATE_CARD_SUCCESS": {
      return state.map(card => {
        if (card._id === action.card._id) {
          card = action.card
        }
        const {comments, ...cardWithoutComments} = card
        return cardWithoutComments
      });
    }
    case "DELETE_CARD_SUCCESS": {
      // CONFIRM IF RIGHT
      return state.filter(card => card._id !== action.cardId);
    }
    default:
      return state;
  }
}
