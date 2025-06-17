"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Blockconfigs,BlockConfig} from "./types";

const Block = (props: BlockConfig )=> {
  const [inputval, setInputval] = useState("");
  const changetxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputval(e.target.value);
  };

  return (
    <div key={props.id}>
      <Card className={props.color}>
        <CardHeader>
          <CardTitle>
            <p>{props.label}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {props.hasInput && (
            <Input
              value={inputval}
              onChange={changetxt}
              placeholder=""
            />
          )}
          <p>ID: {props.id}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Block;
