export default function board(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const lists = action.board.lists.map(list => {
        const {cards, ...listWithoutCards} = list
        return listWithoutCards
      })
      
      return lists
    }
    default:
      return state;
  }
}