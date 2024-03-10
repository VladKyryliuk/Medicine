import { useState } from 'react';
import MenuPharmacy from '../components/MenuPharmacy';
import Products from '../components/Products';
import "../style/Shop.css";

export default function Shop() {
    const [selectedPharmacyId, setSelectedPharmacyId] = useState(null);

    const handlePharmacyClick = (pharmacyId) => {
        setSelectedPharmacyId(pharmacyId);
    }

    return (
        <div>
            <div className="wrapper">
                <div className="content">
                    <MenuPharmacy handlePharmacyClick={handlePharmacyClick} />
                    <Products pharmacyId={selectedPharmacyId} />
                </div>

            </div>
        </div>
    )
}
