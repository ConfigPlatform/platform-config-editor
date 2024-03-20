import Text from '@/app/component/schema/page/Text';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';
import Table from '@/app/component/schema/page/table/Table';
import Filter from '@/app/component/schema/page/Filter';
import Pagination from '@/app/component/schema/page/Pagination';
import Form from '@/app/component/schema/page/form/Form';
import Link from '@/app/component/schema/page/Link';
import Dropdown from '@/app/component/schema/page/Dropdown';
import Tooltip from '@/app/component/schema/page/Tooltip';

const componentMap: {[name: string]: any} = {
  text: Text,
  link: Link,
  button: Button,
  row: Row,
  col: Col,
  table: Table,
  filter: Filter,
  pagination: Pagination,
  form: Form,
  dropdown: Dropdown,
  tooltip: Tooltip,
};

export default componentMap;
