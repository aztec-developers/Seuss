import { MongoObservable } from 'meteor-rxjs';
import { Class } from '../models';

export const Classes = new MongoObservable.Collection<Class>('classes');
