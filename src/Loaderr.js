import React from "react"
import { render } from "@testing-library/react"
import ClipLoader from "react-spinners/ClipLoader";
import Loader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


 function Loaderr({loading}) {
    return (
        <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={usersLoading}
        />
      </div>
    )
 }
export default Loaderr