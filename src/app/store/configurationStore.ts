import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {getRequest} from '@/app/util/request/request';

export interface IConfiguration {
  entities: object[];
  footer: object;
  navbar: object;
  handlers: object[];
  modals: object[];
  pages: object[];
  sidepanels: object[];
}

interface IState {
  configuration: Partial<IConfiguration>;
  structurePath: string;
  selectedPathList: string[];
  elementPath: string;
  loading: boolean;
  error: Error | null;
  getConfiguration: () => Promise<void>;
  addSelectedPath: (payload: string) => void;
  reset: () => void;
}

const initialState: Pick<
  IState,
  'configuration' | 'selectedPathList' | 'structurePath' | 'elementPath' | 'loading' | 'error'
> = {
  configuration: {},
  selectedPathList: [],
  structurePath: '',
  elementPath: '',
  loading: false,
  error: null,
};

const useConfigurationStore = create<IState>()(
  devtools((set, get) => ({
    ...initialState,

    getConfiguration: async () => {
      const configuration = await getRequest({url: '/api/configuration'});
      set({configuration});
    },

    addSelectedPath: (path) => {
      const selectedPathList = get().selectedPathList;

      selectedPathList.unshift(path);

      set({selectedPathList});
    },

    reset: () => set(initialState),
  })),
);

export default useConfigurationStore;
