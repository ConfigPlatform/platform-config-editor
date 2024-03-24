import VariableUpdate from './VariableUpdate';
import Return from './Return';
import VariableDefine from './VariableDefine';
import TableRecordCreate from './TableRecordCreate';
import TableRecordDelete from './TableRecordDelete';
import TableDataSelect from './TableDataSelect';
import Condition from './Condition';

const HandlerComponentMap: {[name: string]: any} = {
  RETURN: Return,
  CONDITION: Condition,
  TABLE_RECORD_DELETE: TableRecordDelete,
  VARIABLE_UPDATE: VariableUpdate,
  VARIABLE_DEFINE: VariableDefine,
  TABLE_RECORD_CREATE: TableRecordCreate,
  TABLE_DATA_SELECT: TableDataSelect,
};

export default HandlerComponentMap;
