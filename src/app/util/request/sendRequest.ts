import {IHttpMethod} from '@/app/util/request/types';
import {requestHandlerMap} from '@/app/util/request/request';

interface ISendRequest {
  set: (payload: any) => void;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  body: Omit<IHttpMethod, 'method'>;
}

const sendRequest = async ({set, method, body}: ISendRequest): Promise<unknown> => {
  const provider = requestHandlerMap[method.toLowerCase()];

  // run request safely
  try {
    // start loading
    set({loading: true});

    // run request
    const response = await provider(body);

    // end loading
    set({loading: false});

    return response;
  } catch (err) {
    set({error: err, loading: false});
  }
};

export default sendRequest;
