import { defineQuery } from "next-sanity";

export const PRODUCT_QUERY = 
    defineQuery(`*[
  _type == "product" && 
  defined(slug.current) && 
  (!defined($search) || categories match $search || name match $search)
] | order(_createdAt desc) {
  _id, 
  name, 
  description,
  price, 
  stock, 
  categories, 
  image,
  slug
}`);

export const PRODUCT_BY_SLUG_QUERY = 
    defineQuery(`*[_type == "product" && slug.current == $slug][0] {
  _id, 
  name, 
  description,
  descriptionLong,
  price, 
  stock, 
  categories, 
  image,
}`);