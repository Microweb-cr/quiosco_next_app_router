import type { OrderWithProducts } from "@/src/types"

type LatesOrderItemProps = {
    order : OrderWithProducts
}

export default function LatesOrderItem({order}: LatesOrderItemProps) {
    return (
        <div className=" bg-white shadow-lg p-5 space-y-5 rounded-lg mb-5">
            <p className=" text-2xl font-bold text-slate-700">
                Cliente: {order.name}
            </p>

            <ul 
                role="list"
                className=" divide-y divide-gray-400 border-t border-gray-400 text-sm font-medium text-gray-700"
            >
                {order.orderProducts.map( product => (
                    <li
                        key={product.id}
                        className=" flex py-6 text-lg"
                    >
                        <p>
                            <span className=" font-bold">
                                ( {product.quantity} ) {' '}
                            </span>
                            {product.product.name}
                        </p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
