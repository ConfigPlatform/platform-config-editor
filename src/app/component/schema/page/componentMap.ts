import Text from './Text';
import Container from './Container';
import Button from '@/app/component/schema/page/Button';
import Row from '@/app/component/schema/page/Row';
import Col from '@/app/component/schema/page/Col';

const componentMap: {[name: string]: any} = {
  text: Text,
  button: Button,
  container: Container,
  row: Row,
  col: Col,
};

export default componentMap;
