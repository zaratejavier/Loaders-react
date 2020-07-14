import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loader({ loading, size = 50 }) {
  return (
    <div className="sweet-loading">
      <HashLoader
        css={override}
        size={size}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
}