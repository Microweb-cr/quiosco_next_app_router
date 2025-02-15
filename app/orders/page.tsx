"use client"
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import type { OrderWithProducts } from "@/src/types";
import LatesOrderItem from "@/components/order/LatesOrderItem";


export default function OrdersPage() {

    const url = '/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 6000,
        revalidateOnFocus: false
    })

    if (isLoading) return <h1 className=" text-center text-2xl font-black mt-40">Cargando....</h1>

    if (data) return (
        <>
            <h1 className=" text-center mt-20 text-6xl font-black">Ordenes Listas</h1>

            <Logo />

            {data.length ? (
                <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-5">
                    {data.map( order => (
                        <LatesOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}

                </div>
            ) : <p className=" text-center my-10">No Hay Ordenes Listas</p>}
        </>
    )
}
