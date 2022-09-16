import { RESTDataSource } from "apollo-datasource-rest";
import { Color } from "../schemas/color";

const COLORS: Color[] = [
  { _id: "white", name: "biały" },
  { _id: "grey", name: "szary" },
  { _id: "black", name: "czarny" },
  { _id: "red", name: "czerwony" },
  { _id: "colour", name: "kolorowy" },
  { _id: "cream", name: "kremowy" },
  { _id: "brown", name: "brązowy" },
];

class ColorsApi extends RESTDataSource {
  async getColors(): Promise<Color[]> {
    return Promise.resolve(COLORS);
  }
}

export default ColorsApi;
