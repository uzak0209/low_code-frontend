"use client";
import { useState } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

type Blockprops = {
  name: string;
  id: number;
  input?: boolean;
};

const Block = (props: Blockprops) => {
  const [inputval, setInputval] = useState("");

  const changetxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputval(e.target.value);
  };

  return (
    <div className={props.name} key={props.id}>
      <Card className="p-4">
        <p>{props.name}</p>
        {props.input && (
          <Input
            value={inputval}
            onChange={changetxt}
            placeholder="Type something..."
          />
        )}
        <p>ID: {props.id}</p>
      </Card>
    </div>
  );
};

export default Block;
