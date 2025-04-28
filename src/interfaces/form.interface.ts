type FormType = "text" | "textarea" | "hidden";

export interface IForm {
  name: string;
  type: FormType;
  placeholder?: string;
  required?: boolean
  value?: unknown
}
