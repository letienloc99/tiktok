import React, { ReactNode } from "react";
import "./GLobalStyles.scss";

interface Props {
  children: ReactNode;
}
const GlobalStyles: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyles;
