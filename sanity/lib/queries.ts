import { defineQuery } from "next-sanity";

export const PRODUCT_QUERY = 
    defineQuery(`*[_type == "product" && defined(slug.current) && !defined($search) || categories match $search || name match $search] | order(_createdAt desc) {
    _id, 
    name, 
    description, 
    price, 
    sales, 
    stock, 
    categories, 
    image,
    slug
}`);