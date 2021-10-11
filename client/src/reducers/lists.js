export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      const lists = action.board.lists.map(list => {
        const {cards, ...listWithoutCards} = list
        return listWithoutCards
      })

      return lists
    }

    case "ADD_NEW_LIST_SUCCESS": {
      return state.concat(action.list)
    }

    case "UPDATE_LIST_TITLE_SUCCESS": {
      return state.map(list => {
        if (list._id == action.list._id) {
          list.title = action.list.title
        }
        return list
      })
    }
    default:
      return state;
  }
}