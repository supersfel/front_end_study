//types.ts
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TodosAction = ActionType<typeof actions>;
//actions들의 type들이 모두 뱉어진다.

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
