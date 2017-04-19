import { Classes } from "../imports/collections/";
import { Meteor } from 'meteor/meteor';
import { Class } from '../imports/models';
import { Observable } from 'rxjs';

import { Users2 } from "../imports/collections/users2";

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
      classOwner: 'Ivan Bajics'
    });

  }

  if (Users2.find({}).cursor.count() === 0) {

    Users2.collection.insert({
      userName: 'John Smith',
      userEmail: "john@smith.com",
      isProfessor: false,
      redID: 8180000002
    });

    Users.collection.insert({
      userName: 'Nimish Saxena',
      userEmail: "whatevenisrocketleague@gmail.no",
      isProfessor: false,
      redID: 8180000002
    });

    Users.collection.insert({
      userName: 'David Arce',
      userEmail: "ithinkimgoodatrocketleaguef@gmail.no",
      isProfessor: false,
      redID: 8180000001
    });
  }
});
