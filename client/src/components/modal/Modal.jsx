import React, { useEffect } from "react";
import ModalHeader from "./ModalHeader"
import ModalBody from "./ModalBody"
import ModalAside from "./ModalAside"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../../actions/CardActions";


const Modal = (props) => {
  const cardId = props.match.params.id;
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const card = cards.find(card => card._id === cardId);

  useEffect(() => {
    dispatch(getCard(cardId));
  }, [dispatch])

  if (!card) {
    return null;
  }

  function showArchivedBanner() {
    if (card.archived) {
      return <div className="archived-banner">
              <i className="file-icon icon"></i>
              This card is archived.
            </div>
    }
  };

  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <Link to={`/boards/${card.boardId}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>
        {showArchivedBanner()}
        <ModalHeader listId={card.listId} card={card}/>
        <ModalBody card={card}/>
        <ModalAside />
      </div>
    </div>
  );
};

export default Modal;
