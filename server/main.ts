import { Classes } from "../imports/collections/";
import { Meteor } from 'meteor/meteor';
import { Class } from '../imports/models';
import { Observable } from 'rxjs';

// import { Users } from "../imports/collections/users";

// Populating the database with some dummy data if there is no data. Just for
// testing
Meteor.startup(() => {
  if (Classes.find({}).cursor.count() === 0) {

    Classes.collection.insert({
      className: 'CS 107',
      sectionNumber: 102,
      classOwner: 'Ivan Bajic'
    });

    Classes.collection.insert({
      className: 'CS 107',
      sectionNumber: 103,
      classOwner: 'Ivan Bajic'
    });

    Classes.collection.insert({
      className: 'CS 108',
      sectionNumber: 1,
      classOwner: 'Ivan Bajic'
    });

    Classes.collection.insert({
      className: 'CS 108',
      sectionNumber: 2,
      classOwner: 'Ivan Bajic'
    });

  }

  // if (Users.find({}).cursor.count() === 0) {
  //
  //   Users.collection.insert({
  //     userName: 'John Smith',
  //     userEmail: "john@smith.com",
  //     isProfessor: false
  //   });
  //
  //
  // }

});
