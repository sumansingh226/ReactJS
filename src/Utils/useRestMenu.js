import { useEffect, useState } from "react";
import restorentsListData from "./Mock_Data";

const useRestMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        let clearTimer = setTimeout(() => {
            const restorent = restorentsListData?.find(
                (res) => res.info.id === resId
            );
            setResInfo(restorent);
            clearTimeout(clearTimer);
        }, 3000);
    };

    return resInfo;
};

export default useRestMenu;
