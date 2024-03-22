import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  field: string;
  value: string;
  path: string;
}

const Mutate = (props: IProps) => {
  const {field, value, path} = props;

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-green-500'}>
      <BlockLabel label={'Mutate'} />
      <div>
        <p className={'text-sm'}>Field: {field}</p>
        <p className={'text-sm'}>Value: {value}</p>
      </div>
    </ComponentSelect>
  );
};

export default Mutate;
