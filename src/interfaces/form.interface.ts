import { SelectOption } from "./common.interface";

type FormType = "text" | "textarea" | "hidden" | "multiple" | "select" | "autocomplete";

export interface IForm {
  name: string;
  type: FormType;
  placeholder?: string;
  required?: boolean;
  value?: unknown;
  getOptions?: (name?:string) => Promise<SelectOption[]>;
  multiple?:boolean
}
