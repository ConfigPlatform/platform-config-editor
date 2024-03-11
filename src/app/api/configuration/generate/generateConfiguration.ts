import {NextRequest} from 'next/server';
import axios from 'axios';

const {HELPER_SERVER_ORIGIN} = process.env;

const generateConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  const {task, scope, entries} = data;

  // update configuration
  const response = await axios.patch(`${HELPER_SERVER_ORIGIN}/configuration`, {task, scope, entries});

  const configuration = response.data;

  return Response.json({configuration});
};

export default generateConfiguration;
