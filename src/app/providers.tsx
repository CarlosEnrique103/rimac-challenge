"use client";
import { type ReactNode } from "react";

import APIProvider from "@/core/api/api-provider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <APIProvider>{children}</APIProvider>
    </>
  );
};

export default Providers;
