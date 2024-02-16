import path from 'path';

// functions merges two or more paths
const mergePath = (...paths: string[]): string => path.join(...paths);

export default mergePath