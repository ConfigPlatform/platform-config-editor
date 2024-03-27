import {NextRequest} from 'next/server';
import axios from 'axios';
import updateConfigurationQuery from '@/app/api/query/updateConfiguration';

const {HELPER_SERVER_ORIGIN} = process.env;

const generateConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  const {task, scope, entries, path} = data;

  // update configuration
  const response = await axios.patch(`${HELPER_SERVER_ORIGIN}/configuration`, {task, scope, entries});

  const configUpdates = response.data;

  // update configuration file
  updateConfigurationQuery({scope, path, configUpdates});

  return new Response(null, {status: 200});
};

export default generateConfiguration;
