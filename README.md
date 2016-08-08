## Before Start
Yo need to have installed `create-react-app` globally. After clone this repo go to project folder and install all the node packages required.
You can start the app using `npm start` command.

```
git clone https://github.com/mario-camacho2/easy-course-catalog.git
cd easy-course-catalog
npm install -g create-react-app
npm install
npm start

```

## Folder Structure

```
easy-course-catalog/
  README.md
  index.html
  favicon.ico
  node_modules/
  package.json
  src/
    App.css
    App.js
    index.css
    index.js
    logo.svg
```

## What is currently implemented

* `ok` Initialize course data from "backend" `actually from store`
* `ok` Edit Name and Description
* `ok` Edit Author and Title for each Textbook
* `ok` Discard all changes without reloading the page
* `ok` "Save" all changes to backend
  * `ok` Call the PUT endpoint, but handle all errors as if the call succeeded
  * `ok` After saving, if you edit and discard changes, it should reset to the saved version
  * `ok` No validation
* `ok` Discard changes to one Textbook without reloading the page
  * `ok` Only discard changes to the selected Textbook
* "Save" changes to one Textbook to backend `maybe just my perspective but a book has no sense without a course in this case (it even does not have an id) so to save books you must save the course. You can imagine a documented oriented DB like mondoDB :)`.
