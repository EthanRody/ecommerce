import Link from "next/link";
import { Button } from "./ui/button";
import { Product } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({ product }: { product: Product}) => {
  const { name, description, stock, price, image, categories, slug } = product;
  const categoriesList = categories? categories.split(',').map(item => item.trim()) : [];

  return (
    <li className="product-card group">
        <div className="flex-between">
            <p className="product_card_date text-20-medium">
                {stock} Remaining
            </p>
            <span className="text-26-semibold">${price}</span>
        </div>

        <Link href={`/product/${slug? slug.current : "no-link"}`}>
          <h2 className="text-30-semibold">{name}</h2>
        </Link>

        {/* Image with hover effect container */}
        <div className="relative overflow-hidden group">
          <Link href={`/product/${slug? slug.current : "no-link"}`}>
            {image && (
              <Image 
                src={urlFor(image).url()} 
                alt="Product image"
                width={300}
                height={300}
                className="product-card_img transition-transform duration-300"
              />
            )}
            {/* Semi-transparent overlay with description */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-100 flex items-center justify-center p-4 rounded-[10px]">
              <p className="text-white text-center text-lg font-medium backdrop-blur-md bg-black/30 px-4 py-2 rounded-lg">
                {description}
              </p>
            </div>
          </Link>
        </div>
        
        
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