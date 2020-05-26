export default class Image {
  constructor(data) {
   this.img = data.large_url
  }

  get Template() {
    return `
    <img src="${this.img}">
    `
  }
}