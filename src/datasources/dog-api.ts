import { RESTDataSource } from "apollo-datasource-rest";

export type DogsMessages = Record<string, string[]>;

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

  async getDogs(type: string): Promise<string[]> {
    const response = await this.get("breeds/list/all");

    if (Object.keys(response?.message || {}).length) {
      const result: string[] = [];

      Object.entries(response.message).forEach(
        ([speciesName, subSpecies]: any) => {
          if (subSpecies?.length) {
            subSpecies.forEach((subName: string) => {
              result.push(`${speciesName} ${subName}`);
            });
          }
        }
      );

      return result;
    }

    return [];
  }
}

export default DogApi;
