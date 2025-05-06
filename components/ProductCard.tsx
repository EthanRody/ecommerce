import { DollarSignIcon } from "lucide-react"
import Link from "next/link";
import { Button } from "./ui/button";
import { Product } from "@/sanity/types";

const ProductCard = ({ product }: { product: Product}) => {
  const { name, description, stock, price, image, categories } = product;
  const categoriesList = categories? categories.split(',').map(item => item.trim()) : [];

  return (
    <li className="product-card group">
        <div className="flex-between">
            <p className="product_card_date text-20-medium">
                {stock} Remaining
            </p>
            <div className="flex gap-1.5">
                <DollarSignIcon className="size-6 text-primary" />
                <span className="text-20-medium">{price}</span>

            </div>
        </div>

        <h2 className="text-30-semibold">{name}</h2>
        <p>{description}</p>

        <img src={image} alt="placeholder" className="product-card_img" />
        
        <div className="flex-between gap-3 mt-5">
          {(categoriesList?.length > 0 && (
            <ul className="flex justify-start space-x-4">
              {categoriesList.map((category: string, index: number) => (
                <li key={index}>
                  <Link href={`/?query=${category.toLowerCase()}`}>
                    <span className="font-semibold">{category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <Button className="product-card_btn">Add to Cart</Button>
        </div>
        
                
    </li>
  )
}

export default ProductCard