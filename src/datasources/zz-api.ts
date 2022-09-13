import { RESTDataSource } from "apollo-datasource-rest";

const API_URL = "https://localhost:4000/api";

class ZnajdzZwierzakaApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  getLosts() {
    return this.get("losts");
  }

  getLostById(id: string) {
    return this.get(`lost/${id}`);
  }

  updateLostById(id: string, payload: any) {
    // TODO: handle any
    return this.patch(`lost/${id}`, payload);
  }

  addLost(payload: any) {
    // TODO: handle any
    return this.post("losts", payload);
  }

  deleteLost(id: string) {
    //
    return this.delete(`lost/${id}`);
  }
}

export default ZnajdzZwierzakaApi;
