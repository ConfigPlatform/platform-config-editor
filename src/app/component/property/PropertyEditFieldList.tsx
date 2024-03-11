import PropertyEditField from '@/app/component/property/PropertyEditField';
import usePropertyEditStore from '@/app/store/propertyEditStore';

const PropertyEditFieldList = () => {
  const properties = usePropertyEditStore((state) => Object.keys(state.fields));

  return properties.map((el, i) => <PropertyEditField key={i} property={el} />);
};

export default PropertyEditFieldList;
