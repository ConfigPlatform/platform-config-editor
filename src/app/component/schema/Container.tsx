import React from 'react';
import {get} from 'lodash';
import Text from '@/app/component/schema/Text';
import Form from '@/app/component/schema/Form';
import Filter from '@/app/component/schema/Filter';
import Button from '@/app/component/schema/Button';
const Container = (props) => {
  //TODO: Add other components when they are implemented.
  const componentMap: {[name: string]: any} = {
    container: Container,
    text: Text,
    form: Form,
    filter: Filter,
    button: Button,
  };

  const content = get(props, 'content', []);

  return (
    <div>
      Container:
      <div className="border-dashed border-4 border-sky-500 rounded-lg p-5 my-2.5 mx-auto overflow-auto">
        {content.map((item, index) => {
          const Component = componentMap[item.type];

          if (!Component) {
            return null;
          }
          return <Component key={item.id || index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Container;
