import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoard } from "../../actions/BoardActions"
import BoardHeader from "./BoardHeader"
import ExistingLists from "./ExistingLists"

const Board = (props) => {
  let boardId

  if (props.match.path === "/cards/:id") {
    /*
    const state = useSelector(state => state)
    console.log(state)
    const cards = useSelector(state => state.cards)
    console.log(cards)
    const renderedCard = cards.find(card => card._id == props.match.params.id)
    boardId = renderedCard._id*/
    boardId = "615c817f9ca1eb06519726f4"
  } else {
    boardId = props.match.params.id
  }
  const dispatch = useDispatch()

  const boards = useSelector(state => state.boards)
  const board = boards.find(board => board._id == boardId)

  useEffect(() => {
    dispatch(fetchBoard(boardId))
  }, [dispatch, boardId])

  return <>
    <BoardHeader board={board} />
    <ExistingLists boardId={boardId}/>
  </>
}

export default Board