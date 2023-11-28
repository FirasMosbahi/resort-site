import React from "react";
import { Star } from "@resort-site/components/icons";
import { number } from "prop-types";

export default function Stars({
  number,
  width,
  height,
}: {
  number: number;
  width: number | undefined;
  height: number | undefined;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < number; i++) {
    stars.push(<Star width={width} height={height} />);
  }
  return (
    <div className="flex flex-row items-center justify-center">{stars}</div>
  );
}
