import React, { useEffect, useState } from "react";
import "../style/MenuPharmacy.css";
import axios from "axios";


export default function MenuPharmacy({ handlePharmacyClick }) {
    const [pharmacy, setPharmacies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pharmacy")
            .then(response => {
                setPharmacies(response.data);
            });
    }, []);


    return (
        <div className="menu-pharmacy">
            <p>Shops:</p>
            {pharmacy.map(pharmacy => (
                <div className="pharmacy-container">
                    <button key={pharmacy.id} onClick={() => handlePharmacyClick(pharmacy.id)}>
                        {pharmacy.name}
                    </button>
                </div>
            ))}

        </div>
    );
}