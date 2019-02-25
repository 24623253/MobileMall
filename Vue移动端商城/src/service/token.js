import storage from '../utils/storage'

export default {
  getInfo() {
    return storage.getLocal("token");
  },
  setInfo(value) {
    storage.setLocal("token", value);
  },
  removeInfo() {
    storage.removeLocal("token");
  }
}