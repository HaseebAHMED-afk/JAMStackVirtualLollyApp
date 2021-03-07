import { Link } from "gatsby";
import React from "react";
import Lolly from "../components/Lolly";
import "../styles/main.css";

const Template = ({ pageContext: { data } }) => {

  console.log(data);
  
  return (
    <div >
        {
            data && (
                <div className="show-lolly">
                <Lolly lolyTop={data.flavorTop} lolyBottom={data.flavorBottom} lolyMiddle={data.flavorMiddle} />
                <div>
                <p className="to">{data.from} sent you a lolly!!</p>
                <p className="link-to">Share it with this link</p>
                <p className="link" >{`https://virtual-lollybyhaseebahmed.netlify.app/lolly/${data.lollyPath}`}</p>
                <div className="lolly-container">
                  <p className="msg">{data.recepientName}</p>
                  <p className="msg">{data.message}</p>
                  <p className="from">~{data.from}</p>
                </div>
                </div>
               
                </div>
            )
        }
    </div>
  );
};

export default Template;