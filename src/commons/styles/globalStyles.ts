import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    color: purple;
    font-family: "notoFont";
  }

  @font-face {
    font-family: "notoFont";
    src: url("/fonts/Noto_Sans_KR/static/NotoSansKR-ExtraBold.ttf");
  }
`;
