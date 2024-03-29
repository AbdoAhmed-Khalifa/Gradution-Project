import Available from '../Available/Available';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  const {
    productId,
    productImage,
    productDescription,
    productPrice,
    quantityInStock,
    quantity,
  } = item;
  const availability = quantityInStock > 0;

  return (
    <div className="w-full border-t-2 border-slate-300 rounded-md p-4 flex  justify-between">
      <div className="flex items-center">
        <div>
          <img className="w-40 mr-16 " src={productImage} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/product/${productId}`}>
            <h3 className="font-semibold w-[90%]">{productDescription}</h3>
          </Link>

          <Available availability={availability} size="xs" />
        </div>
      </div>
      <div className=" font-semibold">${productPrice}</div>
    </div>
  );
}

export default ItemCard;
