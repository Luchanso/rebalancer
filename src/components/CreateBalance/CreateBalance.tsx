import React from "react";

type Props = {
  onCreate: () => void;
};

export function CreateBalance({ onCreate }: Props) {
  return <button onClick={onCreate}>Create balance</button>;
}
