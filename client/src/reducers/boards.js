export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "FETCH_BOARD_SUCCESS": {
      const filteredState = state.filter(b => b._id !== action.board._id)
      //eslint-disable-next-line
      const {lists, ...boardWithoutList} = action.board
      return filteredState.concat(boardWithoutList);
    }
    default:
      return state;
  }
}
