import React from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import Course from './Course';

let courses = [
    {
        "id": "123",
        "name": "Introduction to Advertising",
        "description": "Learn about advertising",
        "textbooks": [
            {
                "author": "Joe Smith",
                "title": "Mobile Advertising Fundamentals"
            },
            {
                "author": "Eli Hinnegan",
                "title": "Introduction to Location-Based Advertising"
            },
            {
                "author": "Edward Bernays",
                "title": "Public Relations"
            },
        ]
    },
    {
        "id": "654",
        "name": "Introduction to React.js programming",
        "description": "React.js for begginers"
    }
];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Easy Course</h2>
                </div>
                <div className="course-list">
                    {_.map(courses, function(course){
                        return <Course key={course.id} course={course} />;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
