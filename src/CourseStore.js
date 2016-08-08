import Reflux from 'reflux';
import _ from 'lodash';
import CourseActions from './CourseActions';

const CourseStore = Reflux.createStore({
    listenables: CourseActions,
    getInitialState: function () {
        this.course_orig = {
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
        };
        this.course = _.clone(this.course_orig);
        return this.course;
    },
    onUpdateCourse: function (name, description) {
        this.course.name = name;
        this.course.description = description;
        this.trigger(this.course);
    },
    onDiscardChanges: function() {
        this.course = _.clone(this.course_orig);
        this.trigger(this.course);
    }
});

export default CourseStore;
