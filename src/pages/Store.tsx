import storeItems from "../data/items.json"
import StoreItems from "../components/StoreItems"
interface StoreItemsDetails {
    id : number;
    name : string;
    price : number;
    imgUrl:string;

}
function Store() {
    return ( 
        <div className="flex justify-around  px-3 flex-wrap">
            {storeItems.map((items: StoreItemsDetails , index:number) => <StoreItems {...items} key={index}/>)}

        </div>
     );
}

export default Store;