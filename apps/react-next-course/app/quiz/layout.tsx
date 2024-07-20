import React from "react";

const NestedLayout = ({ children }: { children: React.ReactNode }) => {
  return <nav>{children}</nav>;
};

export default NestedLayout;
