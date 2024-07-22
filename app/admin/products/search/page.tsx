import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductTable from "@/components/products/ProductTable";
import Link from "next/link";
import ProductsSearchForm from "@/components/products/ProductsSearchForm";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams}: {searchParams: {search: string}}) {

    const products = await searchProducts(searchParams.search)

    return (
        <>
            <Heading>Resultados de la Búsqueda</Heading>

            <div className=" flex flex-col lg:flex-row lg:justify-end gap-5">
                
                <ProductsSearchForm />
            </div>

            {products.length ? (
                <ProductTable 
                    products={products}
                />
            ) : 
                <p className=" text-center text-xl font-bold">No Hay Resultados</p>
            }
        </>
    )
}