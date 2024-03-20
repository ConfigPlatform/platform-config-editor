import {NextRequest} from 'next/server';
import updateConfigurationQuery from '@/app/api/query/updateConfiguration';

const generateConfiguration = async (req: NextRequest) => {
  const data = await req.json();

  // change element order
  updateConfigurationQuery(data);

  return new Response(null, {status: 200});
};

export default generateConfiguration;
