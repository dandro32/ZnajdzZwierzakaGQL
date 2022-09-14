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

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  race?: string;

  @Field({ nullable: true })
  additional?: string;
}
