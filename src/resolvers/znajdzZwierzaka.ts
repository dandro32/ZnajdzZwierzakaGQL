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
import { Animal } from "../schemas/animal";

@Resolver(() => Animal)
export class ZnajdzZwierzakaResolver {
  //   @Query((returns) => Animal, { nullable: true })
  //   async recipe(@Arg("id") id: string): Promise<Animal | undefined> {
  //     return await context.;
  //   }

  @Query(() => [Animal], {
    description: "Get all lost animals",
  })
  async getLosts(
    @Ctx() ctx: any // TODO: find context type
  ): Promise<Animal[]> {
    return ctx.dataSources.getLosts();
  }

  //   @Mutation((returns) => Recipe)
  //   async addRecipe(@Arg("recipe") recipeInput: RecipeInput): Promise<Recipe> {
  //     const recipe = Object.assign(new Recipe(), {
  //       description: recipeInput.description,
  //       title: recipeInput.title,
  //       ratings: [],
  //       creationDate: new Date(),
  //     });
  //     await this.items.push(recipe);
  //     return recipe;
  //   }
}
