import { Dog } from '@vvi/log';
import { isFalse } from '@vvi/is';

export const dog = new Dog({
  name: 'internal module',
  type: false,
});

export const dun = isFalse(dog.type);
