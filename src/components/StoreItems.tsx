import { Plus, Minus } from "lucide-react";
import { formatCurrency } from "../utilities/currency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemsProp = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
function SoterItems({ id, name, price, imgUrl }: StoreItemsProp) {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()

  const quantity : number = getItemsQuantity(id)
  return (
    <div
      className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
      key={id}
    >
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={imgUrl} alt="card-image" />
      </div>
      <div className="flex justify-between p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{name}</h6>
        <div className="font-thin">{formatCurrency(price)}</div>
      </div>
      {quantity > 0 ? (
        <>
          <div className="flex justify-center items-center px-4 pb-4 pt-0 gap-2">
            <Plus className="bg-blue-600 text-white rounded-sm p-1 cursor-pointer"  onClick={()=>increaseCartQuantity(id)}/>
            <div>
              <span className="font-semibold text-xl">{quantity}</span>
              <span className="font-thin"> in cart</span>
            </div>
            <Minus className="bg-blue-600 text-white rounded-sm p-1 cursor-pointer" onClick={()=>decreaseCartQuantity(id)} />
          </div>
          <div className="mt-1 flex justify-center mb-3">
            <button className="text-white bg-red-600 text-xl p-2 rounded-sm " onClick={()=>removeFromCart(id)}>
              Remove
            </button>
          </div>
        </>
      ) : (
        <button
          className="rounded-md mx-2 bg-blue-500 mb-2 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={()=>increaseCartQuantity(id)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SoterItems;
