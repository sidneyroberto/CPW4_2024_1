import RegularFont from "./OpenSans-Regular.ttf";
import BoldFont from "./OpenSans_Condensed-Bold.ttf";
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
