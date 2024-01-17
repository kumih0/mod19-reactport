//will take each github project and format the same way
//need to generalize data from profile on github 
//include image from readme, descrip from readme, title, link to repo
//to be used in cards format
// ref: itemprop= name codeRepository, description, use restapi from github

import React from 'react';
import Card from 'react-bootstrap/Card'

const Project = (props) => {
    return (
        <div className="project">
            <img />
            <h3>Project name</h3>
            <p>project description</p>
        </div>
    );
};