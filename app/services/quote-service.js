import Quote from "../models/quote.js"
import _store from "../store.js"



// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
constructor(){
  this.getQuote()
}
  async getQuote() {
    console.log("Calling the Quoteman");
    let res = await _quoteApi.get('');
    _store.commit("quote", new Quote(res.data.quote));
  }
}


const quoteService = new QuoteService();
export default quoteService;
