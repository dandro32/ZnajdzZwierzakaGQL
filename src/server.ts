import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import ZnajdzZwierzakaApi from "./datasources/zz-api";
import ColorsApi from "./datasources/colors-api";
import {
  ColorsResolver,
  DogResolver,
  ZnajdzZwierzakaResolver,
} from "./resolvers";
import * as path from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import DogApi from "./datasources/dog-api";

const dataSources = {
  colorsApi: new ColorsApi(),
  dogApi: new DogApi(),
  znajdzZwierzakaAPI: new ZnajdzZwierzakaApi(),
};

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [ColorsResolver, DogResolver, ZnajdzZwierzakaResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => dataSources,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Znajdz Zwierzaka GQL server is running ${url}`);
}

bootstrap();
