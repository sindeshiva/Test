import type { SpecsListFragment } from "../../generated/graphql";
import type { SpecTreeDirectoryNode } from "./deriveTree";

export type DirectoryNode = SpecTreeDirectoryNode<SpecsListFragment>;

export type ProjectConnectionStatus =
  | "LOGGED_OUT"
  | "NOT_CONNECTED"
  | "NOT_FOUND"
  | "ACCESS_REQUESTED"
  | "UNAUTHORIZED"
  | "CONNECTED";