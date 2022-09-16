import { Context } from "apollo-server-core";
import {
  Resolver,
  Query,
  FieldResolver,
  Arg,
  Root,
  Mutation,
  Int,
  ResolverInterface,
  Ctx,
} from "type-graphql";
import { Dog } from "../schemas/dog";

@Resolver(() => Dog)
export class DogResolver {
  @Query(() => [Dog], {
    description: "Get all dogs",
  })
  async getDogs(
    @Ctx() ctx: any // TODO: find context type
  ): Promise<Dog[]> {
    return ctx.dataSources.dogApi.getDogs();
  }
}
