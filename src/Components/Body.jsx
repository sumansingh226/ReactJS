import restorentsList from "../Utils/Mock_Data";
import RestroRentCard from "./RestorentCard";

const Body = (() => {
   
    return <div >
        <div className="serachBar"> Search You Food here</div>
        <div className="restorent-container">
            {
                restorentsList?.map((restorent) => {
                    return <RestroRentCard key={restorent.info.id} restorentInfo={restorent} />
                })
            }

        </div>

    </div>
})


export default Body;