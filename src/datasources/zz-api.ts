import { RESTDataSource } from "apollo-datasource-rest";
import { Animal } from "../schemas/animal";

const API_URL = "http://localhost:3000/api";

class ZnajdzZwierzakaApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  async getLosts(): Promise<Animal[]> {
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
