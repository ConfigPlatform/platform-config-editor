import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {set as lset} from 'lodash';
import {produce} from 'immer';

interface IState {
  fields: {[property: string]: string};
  updateField: (payload: {property: string; value: string}) => void;
  reset: () => void;
}

const initialState: Pick<IState, 'fields'> = {
  fields: {},
};

const usePropertyEditStore = create<IState>()(
  devtools((set) => ({
    ...initialState,

    updateField: ({property, value}) => {
      produce((state) => {
        lset(state, `fields[${property}]`, value);
      });
    },

    reset: () => set(initialState),
  })),
);

export default usePropertyEditStore;
