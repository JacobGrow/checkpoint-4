export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  get Template() {
    return `
    <p class="mb-0 pb-0">"${this.quote}"</p>
    <p class="mt-0 pt-0 pb-0 mb-0 hidden">${this.author}</p>
    `
  }

}