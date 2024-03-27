interface IDragEndPayload {
  activePath: string;
  overPath: string;
  scope: string;
}

const changeElementOrder = ({activePath, overPath}: IDragEndPayload) => {};

export default changeElementOrder;
