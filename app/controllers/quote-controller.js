import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote() {
  console.log("THE QUOTE MAN SAYS:", store.State.quote);
  let template = ""
  template += store.State.quote.Template
  document.getElementById("quote").innerHTML = template
}

export default class QuoteController {

constructor(){
    store.subscribe("quote", drawQuote);
    QuoteService.getQuote();
}

}
