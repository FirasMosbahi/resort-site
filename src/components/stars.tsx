import React from "react";
import { Star } from "@resort-site/components/icons";

export default function Stars({ number }: { number: number }): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < number; i++) {
    stars.push(<Star />);
  }
  return <div className="flex flex-row">{stars}</div>;
}
