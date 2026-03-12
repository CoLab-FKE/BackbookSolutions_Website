import ProductList from "@/components/layout/ProductList";
import Button from "@/components/ui/Button";
import { shopItems } from "@/store/shopItems";
import { BsArrowDownRightSquare } from "react-icons/bs";

export default function ShopSection() {
  return (
    <div className="flex flex-col gap-15 min-h-screen w-[90%] justify-center mx-auto py-50">
      <span className="flex justify-between w-full">
        <h2 className="text-3xl font-light md:text-4xl">
          <strong className="font-bold">Peças sobressalentes</strong> de alta
          qualidade
        </h2>
        <Button className="text-md flex items-center gap-4 bg-none bg-transparent underline hover:bg-transparent group w-fit text-primary-color">
          Ver tudo <BsArrowDownRightSquare size={18} className="transition-all duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5 "/>
        </Button>
      </span>
      <ProductList products={shopItems} />
      
    </div>
  );
}
