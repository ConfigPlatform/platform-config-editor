import {NextRequest} from 'next/server';
import axios from 'axios';

const {HELPER_SERVER_ORIGIN} = process.env;

const updateConfiguration = async (req: NextRequest) => {
  const formData = await req.json();

  const {task, scope, entries} = formData;

  // update configuration
  const response = await axios.patch(`${HELPER_SERVER_ORIGIN}/configuration`, {task, scope, entries});

  const configuration = response.data;

  return Response.json({configuration});
};

export default updateConfiguration;
