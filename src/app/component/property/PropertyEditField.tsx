import usePropertyEditStore from '@/app/store/propertyEditStore';
import {get} from 'lodash';
import {useEffect, useState} from 'react';

export interface IPropertyEditField {
  property: string;
}

const PropertyEditField = ({property}: IPropertyEditField) => {
  const {updateField} = usePropertyEditStore.getState();
  const defaultValue = usePropertyEditStore((state) => get(state, `fields[${property}]`));

  const [value, setValue] = useState(defaultValue);

  const readOnlyProperties: string[] = ['content'];

  useEffect(() => {
    updateField({property, value});
  }, [value]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // read-only view
  if (readOnlyProperties.includes(property)) {
    return (
      <div className={'my-1'}>
        <p>
          {property}: <b>elements</b>
        </p>
      </div>
    );
  }

  return (
    <div className={'my-1'}>
      <label className={'block text-sm font-medium mb-1'}>{property}</label>
      <input
        type={'text'}
        name={property}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
  );
};

export default PropertyEditField;
