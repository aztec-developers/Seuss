import { MongoObservable } from 'meteor-rxjs';
import { User } from '../models';

export const Users2 = new MongoObservable.Collection<User>('users2');
