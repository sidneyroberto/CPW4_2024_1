import RegularFont from "./Inter-Regular.ttf";
import BoldFont from "./Inter-Bold.ttf";
import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "regular";
        src: url(${RegularFont});
    }

    @font-face {
        font-family: "bold";
        src: url(${BoldFont});
    }
`;
