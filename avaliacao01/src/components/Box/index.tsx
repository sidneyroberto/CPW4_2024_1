import { ReactNode } from "react";
import { BoxContainer } from "./styles";

type Props = {
  children: ReactNode;
};

const Box = ({ children }: Props) => <BoxContainer>{children}</BoxContainer>;

export default Box;
