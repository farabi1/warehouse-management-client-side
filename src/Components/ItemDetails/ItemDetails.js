import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../Custom Hook/useInventory';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ItemDetails = () => {
    const { inventoryid } = useParams();
    const [inventories, setInventory] = useInventory([]);

    useEffect(() => {
        const url = `https://serene-forest-41494.herokuapp.com/inventory/${inventoryid}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    return (
        <div>
            <Header></Header>

            <h1>{inventories.name}</h1>

            <Footer></Footer>
        </div>
    );
};

export default ItemDetails;