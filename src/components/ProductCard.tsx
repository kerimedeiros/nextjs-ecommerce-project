import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

// stopped at 1:46:04

export default function ProductCard({ product }: ProductCardProps) {
    const isNew = Date.now() - new Date(product.createdAt)
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
        <figure>
            <Image 
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 object-cover"
            />
        </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
