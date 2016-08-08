import Reflux from 'reflux';

const CourseActions = Reflux.createActions([
    "updateCourse",
    "updateTextbook",
    "deleteTextbook",
    "addTextbook",
    "discardChanges",
    "saveCourse"
]);

export default CourseActions;
