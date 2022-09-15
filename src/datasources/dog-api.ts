import { RESTDataSource } from "apollo-datasource-rest";

export interface DogsResponse {
  message: Record<string, string[]>;
  status: string;
}

const ANIMAL_TYPES: Record<string, string> = {
  dogs: "Psy",
};
const API_URL = "https://dog.ceo/api";

class DogApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  async getTypes(): Promise<typeof ANIMAL_TYPES> {
    // TODO: evaluate when new api found for cats etc.
    return Promise.resolve(ANIMAL_TYPES);
  }

  async getDogs(type: string): Promise<DogsResponse> {
    return this.get("breeds/list/all");
  }
}

export default DogApi;
