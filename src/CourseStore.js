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
        this.course = _.cloneDeep(this.course_orig);
        return this.course;
    },
    onUpdateCourse: function (name, description) {
        this.course.name = name;
        this.course.description = description;
        this.trigger(this.course);
    },
    onUpdateTextbook: function(oldone, newone) {
        let books = this.course.textbooks;
        for(let i=0; i < books.length; i++) {
            if(oldone.title === books[i].title && oldone.author === books[i].author) {
                books[i] = newone;
                break;
            }
        }
        this.trigger(this.course);
    },
    onDiscardChanges: function() {
        this.course = _.cloneDeep(this.course_orig);
        this.trigger(this.course);
    }
});

export default CourseStore;
