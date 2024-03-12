import {NextRequest} from 'next/server';
import updateConfigurationQuery from '@/app/api/query/updateConfiguration';

const generateConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  await updateConfigurationQuery(data);

  return new Response(null, {status: 200});
};

export default generateConfiguration;
