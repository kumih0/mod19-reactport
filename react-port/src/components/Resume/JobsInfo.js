
// import React from "react";

// TODO: save job info exp as objs, property match education or etc?
// save as hardcoded cards premade?
//create objects and then destructure objects to properties when populate?

// group 0 main, 1 food, 2 edu, 3 comp

const dsd = {
    title: "Baker",
    place: "Downstate Donuts",
    location: "Chicago",
    time: "March 2023 - Present",
    detail: "stuff",
    hl1: "",
    hl2: "",
    hl3: "",
    group: [0, 1]
};

const ohu = {
    title: "Preschool Teacher",
    place: "One Hope United",
    location: "Chicago",
    time: "May 2022 - February 2023",
    detail: "",
    hl1: "",
    hl2: "",
    hl3: "",
    group: [0, 2]
};

const d65 = {
    title: "Academic Tutor",
    place: "Oakton Elementary School",
    location: "Evanston",
    time: "March 2022 - June 2022",
    detail: '',
    hl1:'',
    hl2:'',
    hl3:'',
    group: [0, 2]
};

const def = {
    title: "Front of House/Wholesale Manager",
    place: "Defloured Bakery",
    location: "Chicago",
    time: "December 2020 - May 2022",
    detail:'',
    hl1:'',
    hl2:'',
    hl3:'',
    group: [0, 1]
};

const bag = {
    title: "Team Member",
    place: "Bagel Art Cafe",
    location: "Evanston",
    time: "November 2019 - October 2020",
    detail:'',
    hl1:'',
    hl2:'',
    hl3:'',
    group: [0, 1]
};

const yon = {
    title: "Academic Writing Tutor",
    place: "Underwood International College Writing Center",
    location: "Incheon, S. Korea",
    time: "June 2018 - June 2019",
    detail:'',
    hl1:'',
    hl2:'',
    hl3:'',
    group: [0, 2]
};

const ink = {
    title: "English Language Teacher",
    place: "International Korean Adoptee Services",
    location: "Seoul, S. Korea",
    time: "January 2017 - January 2018",
    detail: '',
    hl1:'',
    hl2:'',
    hl3:'',
    group: [0, 2]
};


//TODO: create fn to assess groups, create array of obj, map over, w/in that fn (destructure the obj into title etc. return>use in useefffect)

const allWork = [
    dsd,
    ohu,
    d65,
    def,
    bag,
    yon,
    ink 
];

const relWork = (group) => {
    let array = [];

    for (let i = 0; i < allWork.length; i++) {
        const jorb = allWork[i];
        
        if (jorb.group.includes(group)) {
            array.push(jorb);
        }
    }
    console.log(array);
    return array;
};

console.log("working...", relWork(0));
console.log("working...again...", relWork(2));
