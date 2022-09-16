import { Context } from "apollo-server-core";
import { Resolver, Query, Ctx } from "type-graphql";
import { Color } from "../schemas/color";

@Resolver(() => Color)
export class ColorsResolver {
  @Query(() => [Color], {
    description: "Get all colors",
  })
  async getColors(
    @Ctx() ctx: any // TODO: find context type
  ): Promise<Color[]> {
    return ctx.dataSources.colorsApi.getColors();
  }
}
