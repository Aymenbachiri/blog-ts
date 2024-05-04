"use client";

import { ThemeProvider } from "@material-tailwind/react";

interface Props {
  children: React.ReactElement;
}

export default function MaterialTailwindProvider({ children }: Props) {
  return <ThemeProvider>{children} </ThemeProvider>;
}
