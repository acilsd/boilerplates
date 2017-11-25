/* @flow */
/* global History, Location, Match, HistoryAction, LocationShape */

declare var module : {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

// NOTE built-in flow definitions for rr4 are broken in 0.59
declare type Location = {
  pathname: string,
  search: string,
  hash: string,
  state?: any,
  key?: string
};

declare type Match = {
  params: { [key: string]: ?string },
  isExact: boolean,
  path: string,
  url: string
};

declare type LocationShape = {
  pathname?: string,
  search?: string,
  hash?: string,
  state?: any
};

declare type HistoryAction = "PUSH" | "REPLACE" | "POP";

declare type History = {
  length: number,
  location: Location,
  action: HistoryAction,
  listen(
    callback: (location: Location, action: HistoryAction) => void
  ): () => void,
  push(path: string | LocationShape, state?: any): void,
  replace(path: string | LocationShape, state?: any): void,
  go(n: number): void,
  goBack(): void,
  goForward(): void,
  canGo?: (n: number) => boolean,
  block(
    callback: (location: Location, action: HistoryAction) => boolean
  ): void,
  index?: number,
  entries?: Array<Location>
};
