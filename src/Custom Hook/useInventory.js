import { useEffect, useState } from "react"

const useInventory = () => {

    const [inventories, setInventory] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventory(data));
    }
        , []);
    return [inventories, setInventory];
}

export default useInventory;