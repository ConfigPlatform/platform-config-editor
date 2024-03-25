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
  selectedItem: number | null;
  getConfiguration: () => Promise<void>;
  addSelectedPath: (payload: string) => void;
  reset: () => void;
  setSelectedItem: (i: number | null) => void;
  assistantInput: string;
  setAssistantInput: (payload: string) => void;
}

const initialState: Pick<
  IState,
  | 'configuration'
  | 'selectedPathList'
  | 'structurePath'
  | 'elementPath'
  | 'loading'
  | 'error'
  | 'selectedItem'
  | 'assistantInput'
> = {
  configuration: {},
  selectedPathList: [],
  structurePath: '',
  elementPath: '',
  selectedItem: null,
  loading: false,
  error: null,
  assistantInput: '',
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
    setSelectedItem: (i: number | null) => set({selectedItem: i}),
    reset: () => set(initialState),

    setAssistantInput: (payload: string) => set({assistantInput: payload}),
  })),
);

export default useConfigurationStore;
