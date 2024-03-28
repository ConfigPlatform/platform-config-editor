import {NextRequest} from 'next/server';
import changeElementPosition from '@/app/api/query/changeElementPosition';

const dragEnd = async (req: NextRequest) => {
  const data = await req.json();

  changeElementPosition(data);

  return new Response(null, {status: 200});
};

export default dragEnd;
