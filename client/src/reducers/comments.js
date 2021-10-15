export default function comments(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const comm = []
      action.board.lists.forEach(list => list.cards.forEach(card => {
        const {comments, ...cardWithoutComments} = card;
        comm.push(comments)
      }));
      return comm
    }
    case "ADD_NEW_CARD_SUCCESS": {
      return state.concat(action.card);
    }
    case "GET_NEW_CARD_SUCCESS": {
      return [action.card];
    }
    case "UPDATE_CARD_SUCCESS": {
      return state.map(card => {
        if (card._id === action.card._id) {
          card = action.card
        }
        return card
      });
    }
    case "CREATE_NEW_COMMENT_SUCCESS" : {
      return state.concat(action.comment)
    }
    default:
      return state;
  }
}