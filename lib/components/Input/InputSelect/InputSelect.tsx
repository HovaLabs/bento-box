import React from "react";

interface InputSelectProps {
  options: Array<{ title: string; value: any }>;
}
export const InputSelect = ({
  options,
  ...rest
}: InputSelectProps): React.ReactElement => (
  <select {...rest}>
    {options.map(o => (
      <option key={o.value} value={o.value}>
        {o.title}
      </option>
    ))}
  </select>
);
InputSelect.defaultProps = {
  options: [],
};
