import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { IResponseOK } from "../models/common";
import { Animal } from "../schemas/animal";

const API_URL = "http://localhost:3000/api";
const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmllbF9kIiwiaWF0IjoxNjYzMjE5NzgzLCJleHAiOjE2NjMyNDEzODN9.a9P7JXq_iKPBeZ5tApOFuxAw68qoG-2zwvJUi3jRFq0";

class ZnajdzZwierzakaApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${mockToken}`);
    // request.headers.set("Authorization", this.context.token);
  }

  // LOSTS

  async getLosts(): Promise<Animal[]> {
    return this.get("losts");
  }

  async getLostById(id: string): Promise<Animal> {
    return this.get(`lost/${id}`);
  }

  async updateLostById(id: string, payload: any) {
    // TODO: handle any
    return this.patch(`lost/${id}`, payload);
  }

  async addLost(payload: any): Promise<IResponseOK> {
    // TODO: handle any
    return this.post("losts", payload);
  }

  async deleteLost(id: string): Promise<IResponseOK> {
    return this.delete(`lost/${id}`);
  }

  // FOUND

  async getFound(): Promise<Animal[]> {
    return this.get("found");
  }

  async getFoundById(id: string): Promise<Animal> {
    return this.get(`found/${id}`);
  }

  async updateFoundById(id: string, payload: any) {
    // TODO: handle any
    return this.patch(`found/${id}`, payload);
  }

  async addFound(payload: any): Promise<IResponseOK> {
    // TODO: handle any
    return this.post("found", payload);
  }

  async deleteFound(id: string): Promise<IResponseOK> {
    return this.delete(`found/${id}`);
  }

  // USERS

  async getUsers(): Promise<any[]> {
    // TODO: handle any
    return this.get("users");
  }

  async getUser(id: string): Promise<Animal> {
    return this.get(`users/${id}`);
  }
}

export default ZnajdzZwierzakaApi;
