import storage from '../utils/storage'

export default {
  getInfo() {
    if (!storage.getLocal("shopcarInfo")) {
      storage.setLocal("shopcarInfo", []);
    }
    return storage.getLocal("shopcarInfo");
  },
  setInfo(value) {
    storage.setLocal("shopcarInfo", value);
  }
}