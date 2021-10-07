import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoard } from "../../actions/BoardActions"
import BoardHeader from "./BoardHeader"
import ExistingLists from "./ExistingLists"

const Board = (props) => {
  const boardId = props.match.params.id
  const dispatch = useDispatch()
  
  const boards = useSelector(state => state.boards)
  const board = boards.find(board => board._id == boardId)


  
  useEffect(() => {
    dispatch(fetchBoard(boardId))
  }, [dispatch, boardId])

  return <>
    <BoardHeader board={board} />
    <ExistingLists />
  </>
}

export default Board