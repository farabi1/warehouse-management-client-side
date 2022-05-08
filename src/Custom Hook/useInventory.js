import { useEffect, useState } from "react"

const useInventory = () => {

    const [inventories, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://serene-forest-41494.herokuapp.com/')
            .then(res => res.json())
            .then(data => setInventory(data));
    }
        , []);
    return [inventories, setInventory];
}

export default useInventory;