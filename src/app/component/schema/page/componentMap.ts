import Text from '@/app/component/schema/page/Text';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';
import Table from '@/app/component/schema/page/table/Table';
import Filter from '@/app/component/schema/page/Filter';
import Pagination from '@/app/component/schema/page/Pagination';
import Form from '@/app/component/schema/page/form/Form';
import Link from '@/app/component/schema/page/Link';

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
};

export default componentMap;
