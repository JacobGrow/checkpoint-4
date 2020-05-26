import Image from "../models/image.js"
import _store from "../store.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor(){
  this.getImage()
  }
  async getImage() {
    console.log("Calling the Imageman");
    let res = await imgApi.get('');
    _store.commit("image", res.data);
  }
}



const imageService = new ImageService();
export default imageService;
