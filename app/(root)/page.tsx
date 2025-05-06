import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { PRODUCT_QUERY } from "@/sanity/lib/queries";
import { Product } from "@/sanity/types";
import HeroBanner from "@/components/HeroBanner";
import FooterBanner from "@/components/FooterBanner";

export default async function Home({ 
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: products } = await sanityFetch({ query: PRODUCT_QUERY, params });

  return (
    <>
      <section className="green_container">
        <HeroBanner />
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Products'}
        </p>

        <ul className="mt-7 card_grid">
          {products?.length > 0 ? (
            products.map((product: Product) => (
              <ProductCard key={product?._id} product={product} />
            ))

          ) : (
            <p className="no-results">No products found</p>
          )}
        </ul>

      </section>

      <FooterBanner />

      <SanityLive />
    </>
  );
}
