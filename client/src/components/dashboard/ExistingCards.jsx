import React from "react"
import { useSelector} from "react-redux"
import Card from "./Card"

const ExistingCards = ({ listId }) => {
  const cards = useSelector(state => state.cards)
  const filteredCards = cards.filter(card => card.listId == listId)


  return <div id="cards-container" data-id="list-1-cards">
    {filteredCards.map(card => (<Card key={card._id} card={card} />))}
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          <div className="card-label green colorblindable"></div>
          <div className="card-label yellow colorblindable"></div>
          <div className="card-label red colorblindable"></div>
          <div className="card-label orange colorblindable"></div>
          <div className="card-label blue colorblindable"></div>
          <div className="card-label purple colorblindable"></div>
          <p>
            Cards do many cool things. Click on this card to
            open it and learn more...
          </p>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon overdue-recent completed">
            Aug 4
          </i>
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          <p>Another list with stuff</p>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon overdue ">Aug 3</i>
          <i className="description-icon sm-icon"></i>
        </div>
      </div>
    </div>
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          <p>
            Use the + in the top menu to make your first board
            now.
          </p>
        </div>
        <div className="card-icons"></div>
      </div>
    </div>
  </div>
  /*const cards = useSelector(state => state.lists)

  console.log(lists)
  return <div id="list-container" className="list-container">
    <div id="existing-lists" className="existing-lists">
      {lists.map(list => (
        <List key={list._id} list={list} />
      ))}
    </div>
    <div id="new-list" className="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" className="button" value="Save" />
              <i className="x-icon icon"></i>
            </div>
          </div>
  </div>*/
}

export default ExistingCards