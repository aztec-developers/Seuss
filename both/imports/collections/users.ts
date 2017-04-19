// Are we even using this in the both folder?

import { MongoObservable } from 'meteor-rxjs';
import { User } from '../models';

export const Users = new MongoObservable.Collection<User>('users');
