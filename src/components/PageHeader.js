import React from "react";
import '../css/Page.css'

const PageHeader = ({app_name}) => (
    <section className='section-header'>
        <header>
            <h1>
                {app_name}
            </h1>
        </header>
    </section>
);

export default PageHeader;