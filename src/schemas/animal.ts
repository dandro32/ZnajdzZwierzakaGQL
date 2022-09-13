import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import { Location } from "./location";

@ObjectType()
export class Animal {
  @Field()
  _id: string;

  @Field()
  location: Location;

  @Field()
  title: string;

  @Field()
  type: string;

  @Field()
  userId: string;

  @Field()
  color: string;

  @Field()
  race: string;

  @Field()
  additional: string;
}
