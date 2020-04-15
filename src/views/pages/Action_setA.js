import {categories} from "../../assets/cards.js";
import {createCards, getCards} from '../../services/GenerateCards.js'

let Action_setA = {
  render : async () => {
    let cardsContent =  await getCards(categories.action_set_a);
      return createCards(cardsContent);
  }
  , after_render: async () => {
    const container = document.getElementById('page_container');
    container.onclick = function(event) {
      if (event.target.className != 'front') {
        return
      }
      let card = event.target.closest('.card-container');
      card.remove();
    }
  }
}
export default Action_setA;