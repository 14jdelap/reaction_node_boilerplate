export default function board(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const cards = []
      action.board.lists.forEach(list => list.cards.forEach(card => {
        cards.push(card)
      }))
      return cards
    }
    default:
      return state;
  }
}