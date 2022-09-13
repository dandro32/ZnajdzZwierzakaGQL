import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Location {
  @Field()
  longitude: string;

  @Field()
  latitude: string;
}
