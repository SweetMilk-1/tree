import { createContext } from "react";

const {
  Provider: DbProvider,
  Consumer: DbConsumer,
} = createContext();

export {
  DbProvider,
  DbConsumer
};