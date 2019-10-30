import React from "react";
import '../css/Page.css'
import WebPackInfo from "./WebpackInfo";

const PageFooter = ({content}) => (
    <section className="section-footer" >
        {content ? content : <WebPackInfo />}
    </section>
);

export default PageFooter;