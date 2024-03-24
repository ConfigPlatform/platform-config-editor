import VariableUpdate from './VariableUpdate';
import Return from './Return';
import VariableDefine from './VariableDefine';
import TableRecordCreate from './TableRecordCreate';
import TableRecordDelete from './TableRecordDelete';
import TableDataSelect from './TableDataSelect';
import Condition from './Condition';
import TableRecordUpdate from './TableRecordUpdate';
import Parallel from './Parallel';
import TableRelation from './TableRelation';

const HandlerComponentMap: {[name: string]: any} = {
  RETURN: Return,
  CONDITION: Condition,
  PARALLEL: Parallel,
  TABLE_RELATION: TableRelation,
  TABLE_RECORD_DELETE: TableRecordDelete,
  VARIABLE_UPDATE: VariableUpdate,
  VARIABLE_DEFINE: VariableDefine,
  TABLE_RECORD_CREATE: TableRecordCreate,
  TABLE_DATA_SELECT: TableDataSelect,
  TABLE_RECORD_UPDATE: TableRecordUpdate,
};

export default HandlerComponentMap;
