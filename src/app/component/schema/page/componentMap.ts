import Text from './Text';
import Container from './Container';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';
import Table from '@/app/component/schema/table/Table';
import Filter from '@/app/component/schema/page/Filter';
import pagination from '@/app/component/schema/page/Pagination';
import Pagination from '@/app/component/schema/page/Pagination';

const componentMap: {[name: string]: any} = {
  text: Text,
  button: Button,
  container: Container,
  row: Row,
  col: Col,
  table: Table,
  filter: Filter,
  pagination: Pagination,
};

export default componentMap;
