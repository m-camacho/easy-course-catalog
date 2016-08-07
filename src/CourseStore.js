import Reflux from 'reflux';
import _ from 'lodash';
import CourseActions from './CourseActions';

const CourseStore = Reflux.createStore({
    listenables: CourseActions,
    getInitialState: function () {
        this.courses = [
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
        return this.courses;
    },
    onDeleteCourse: function(courseToDelete) {
        _.remove(this.courses, (course) => course.id === courseToDelete.id);
        this.trigger(this.courses);

    }
});

export default CourseStore;
