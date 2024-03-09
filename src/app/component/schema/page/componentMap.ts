import Text from '@/app/component/schema/page/Text';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';
import Table from '@/app/component/schema/table/Table';
import Filter from '@/app/component/schema/page/Filter';
import Page from '@/app/component/schema/page/Page';

const componentMap: {[name: string]: any} = {
  page: Page,
  text: Text,
  button: Button,
  row: Row,
  col: Col,
  table: Table,
  filter: Filter,
};

export default componentMap;
