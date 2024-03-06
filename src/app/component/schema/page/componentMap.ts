import Text from './Text';
import Form from './Form';
import Filter from './Filter';
import Container from './Container';
import Button from '@/app/component/schema/page/Button';

const componentMap: {[name: string]: any} = {
  text: Text,
  button: Button,
  container: Container,
  form: Form,
  filter: Filter,
};

export default componentMap;
