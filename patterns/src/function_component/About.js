import React from 'react';

function About (props) {
    let version = props.version ? <p>version {props.version}</p> : null;

    return <div>
            <h1>About page</h1>
            <p>{props.author}</p>
            {version}
    </div>;
}

About.defaultProps = {
    author: "Pello Altadill",
    version: "1.0.0"
};

export default About;