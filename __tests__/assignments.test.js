//const data = {"test": "tested"};
var data_new = { "Student_ID": "123", "Assignment_ID":"12345", "Assignment_Content": "test"};
const fetch = require('node-fetch');
const root = 'https://salty-oasis-45641.herokuapp.com/';
const assignmentsRoot= root  +'api/assignments';
var assignmentID
const postAssignments = function (data_new){
  return fetch(assignmentsRoot, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    //body: JSON.stringify(data_new)
    body: 'Student_ID=123&Assignment_ID=12345&Assignment_Content=test'
  })
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      console.log('ack failed', response.statusText)
    }
  })
  .catch((ex) => {
    throw new Error('fetch failed' + ex)
  });
}

const getAssignments = function (){
  return fetch(assignmentsRoot, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      console.log('ack failed', response.statusText)
    }
  })
  .catch((ex) => {
    throw new Error('fetch failed' + ex)
  });
}

const deleteAssignments = function (ID){
  url = assignmentsRoot + '/'+ID;
  return fetch(url, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      console.log('ack failed', response.statusText)
    }
  })
  .catch((ex) => {
    throw new Error('fetch failed' + ex)
  });
}

test ('API post function',() => {
  postAssignments()
    .then((data) => {
      console.log(data);
      console.log(data.Student_ID + " " + data_new.Student_ID);
      expect(data.Student_ID).toBe(data_new.Student_ID)
    })
});
/*
test ('API get function',() => {
  getAssignments()
    .then((data) => {
      dataJSON = JSON.stringify(data);
      console.log(dataJSON.Student_ID + " " + data_new.Student_ID);
      expect(dataJSON.Student_ID).toBe(data_new.Student_ID)
    })
});
*/
