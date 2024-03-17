import {NextRequest} from 'next/server';
import removeConfigurationQuery from '@/app/api/query/removeConfiguration';

const removeConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  await removeConfigurationQuery(data);

  return new Response(null, {status: 200});
};

export default removeConfiguration;
