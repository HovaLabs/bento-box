/**
 * <Input /> component mocks the behavior of w3 spec for <input />
 * We allow a "type" prop which swaps the type of input, with the default input being "InputText"
 * The Input<Foo> components should not be consumed directly ever, instead use <Input type="foo" />
 */
import React from "react";

import { InputCheckbox } from "./InputCheckbox";
import { InputDate } from "./InputDate";
import { InputFile } from "./InputFile";
import { InputNumber } from "./InputNumber";
import { InputSelect } from "./InputSelect";
import { InputText } from "./InputText";
import { InputTime } from "./InputTime";
import { InputToggle } from "./InputToggle";
import { InputRadio } from "./InputRadio";

interface InputProps {
  type?:
    | "checkbox"
    | "date"
    | "file"
    | "number"
    | "radio"
    | "select"
    | "text"
    | "time"
    | "toggle";
  options?: Array<{ value: any; title: string }>;
}
export const Input = (props: InputProps): React.ReactElement => {
  const { type, ...rest } = props;
  switch (type) {
    case "checkbox": {
      return <InputCheckbox {...rest} />;
    }
    case "date": {
      return <InputDate {...rest} />;
    }
    case "file": {
      return <InputFile {...rest} />;
    }
    case "number": {
      return <InputNumber {...rest} />;
    }
    case "radio": {
      return <InputRadio {...rest} />;
    }
    case "select": {
      return <InputSelect {...rest} />;
    }
    case "time": {
      return <InputTime {...rest} />;
    }
    case "toggle": {
      return <InputToggle {...rest} />;
    }
    case "text":
    default:
      return <InputText {...rest} />;
  }
};
