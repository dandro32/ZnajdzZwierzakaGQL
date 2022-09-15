import { RESTDataSource } from "apollo-datasource-rest";

const COLORS = [
  "biały",
  "szary",
  "czarny",
  "czerwony",
  "kolorowy",
  "kremowy",
  "brązowy",
];

class ColorsApi extends RESTDataSource {
  async getColors(): Promise<string[]> {
    return Promise.resolve(COLORS);
  }
}

export default ColorsApi;
