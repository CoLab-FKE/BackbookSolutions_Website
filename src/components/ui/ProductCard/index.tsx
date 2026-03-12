import { Product } from "@/@types/Product";
import Image from "next/image";
import Button from "../Button";
import { BsArrowDownRightSquare } from "react-icons/bs";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product, ...props}: ProductCardProps) {
  return (
    <div {...props} className="flex flex-col gap-15 justify-between pb-5 group cursor-pointer">
      <section className="flex flex-col gap-2">
        <div className="rounded-t-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={250}
            className="w-full h-80 object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="text-md font-medium">{product.name}</h3>
      </section>

      <section className="flex items-center justify-between w-full">
        <span className="font-bold text-xl">
          {product.price} <span className="font-light text-sm">MZN</span>
        </span>
        <Button className="bg-none bg-transparent text-primary-color p-0 hover:bg-none hover:bg-transparent hover:translate-x-0.5 hover:translate-y-0.5">
          <BsArrowDownRightSquare size={22} />
        </Button>
      </section>
    </div>
  );
}
