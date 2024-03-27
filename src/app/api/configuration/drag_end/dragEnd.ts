import {NextRequest} from 'next/server';
import changeElementOrderQuery from '@/app/api/query/changeElementOrder';

const dragEnd = async (req: NextRequest) => {
  const data = await req.json();

  changeElementOrderQuery(data);

  return new Response(null, {status: 200});
};

export default dragEnd;
