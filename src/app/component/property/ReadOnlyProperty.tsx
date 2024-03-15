const defineText = (property: string): string | undefined => {
  switch (property) {
    case 'content':
    case 'columns':
    case 'fields':
    case 'actions':
      return 'elements';

    case 'vars':
      return 'map';
  }
};

interface IProps {
  property: string;
}

const ReadOnlyProperty = ({property}: IProps) => {
  const text = defineText(property);

  return (
    <div className={'my-1'}>
      <div className={'flex flex-row'}>
        <p className={'mr-2'}>{property}:</p>
        <p className={'font-medium'}>{text}</p>
      </div>
    </div>
  );
};

export default ReadOnlyProperty;
