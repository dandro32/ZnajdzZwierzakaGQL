import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Color {
  @Field()
  _id: string;

  @Field()
  name: string;
}
