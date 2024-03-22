import Delete from './Delete';
import Insert from './Insert';
import Mutate from './Mutate';
import Return from './Return';

const HandlerComponentMap: {[name: string]: any} = {
  insert: Insert,
  return: Return,
  delete: Delete,
  mutate: Mutate,
};

export default HandlerComponentMap;
