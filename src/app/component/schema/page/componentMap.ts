import Text from './Text';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';

const componentMap: {[name: string]: any} = {
  text: Text,
  button: Button,
  row: Row,
  col: Col,
};

export default componentMap;
