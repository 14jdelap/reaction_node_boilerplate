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

    case "CREATE_NEW_COMMENT_SUCCESS" : {
      return state.concat(action.comment)
    }
    default:
      return state;
  }
}