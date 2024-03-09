import Text from './Text';
import Container from './Container';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';
import Table from '@/app/component/schema/table/Table';
import Filter from '@/app/component/schema/page/Filter';
import Link from '@/app/component/schema/page/Link';

const componentMap: {[name: string]: any} = {
  text: Text,
  link: Link,
  button: Button,
  container: Container,
  row: Row,
  col: Col,
  table: Table,
  filter: Filter,
};

export default componentMap;
