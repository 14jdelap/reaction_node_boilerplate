export default function comments(state = [], action) {
  switch (action.type) {
    /*
    case "FETCH_BOARD_SUCCESS": {
      let comm = []
      action.board.lists.forEach(list => list.cards.forEach(card => {
        const {comments, ...cardWithoutComments} = card;
        comm = comm.concat(comments)
      }));
      return comm
    }*/
    case "ADD_NEW_CARD_SUCCESS": {
      const {comments, ...cardWithoutComments} = action.card
      return state.concat(comments);
    }
    case "GET_NEW_CARD_SUCCESS": {
      const {comments, ...cardWithoutComments} = action.card
      return comments;
    }

    case "CREATE_NEW_COMMENT_SUCCESS" : {
      return state.concat(action.comment)
    }
    default:
      return state;
  }
}