import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Dog {
  @Field()
  _id: string;

  @Field()
  name: string;
}
