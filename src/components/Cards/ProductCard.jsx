import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import StarRating from '../StarRating/StarRating';
import { useNavigate } from 'react-router-dom';

export function ProductCard({ id, name, price, image, description, rate }) {
  const navigate = useNavigate();
  function showDetails() {
    navigate(`/product/${id}`);
  }
  return (
    <Card className="cursor-pointer w-72 dark:bg-[#322e3f] dark:text-white" onClick={showDetails}>
      <CardHeader
        shadow={false}
        floated={false}
        className=" h-[327px] flex justify-center"
      >
        <img src={image} alt={name} className="object-contain h-auto" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <StarRating rate={rate} id={id} />
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 dark:text-gray-300"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
