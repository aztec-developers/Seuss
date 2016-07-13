import {Injectable} from '@angular/core';
import {DemoDataObject} from '../../../both/models/demo-data-object';
import {Mongo} from 'meteor/mongo';
import {DemoCollection} from '../../../both/collections/demo-collection';

@Injectable()
export class DemoDataService {
  private data : Mongo.Cursor<DemoDataObject>;

  constructor() {
    this.data = DemoCollection.find({});
  }

  public getData() : Mongo.Cursor<DemoDataObject> {
    return this.data;
  }
}