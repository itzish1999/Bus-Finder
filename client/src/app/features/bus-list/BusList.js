import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBus, clearSelectedBus } from "../selected-bus/selectedBus-slice";
import BusPopUp from "../busPopUp/BusPopUp";

const BusList = ({ buses }) => {
    const dispatch = useDispatch();
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const handleBusClick = (bus) => {
        dispatch(setSelectedBus([bus]));
        setIsPopUpVisible(true);
    }

    const handlePopUpClose = () => {
        dispatch(clearSelectedBus())
        setIsPopUpVisible(false);
    }

    return (
        <div className="card-container">
            {buses.map((bus) => {
                const { stopName, busRoutes } = bus;
                const busNames = busRoutes.map((route) => route.busName).join(", ");

                return (
                    <div className="card-title" key={bus.stopId} onClick={() => handleBusClick(bus)}>
                        <h2> {stopName}</h2>
                        <div className="card-body">
                            <p><b>Buses:</b> {busNames}</p>
                        </div>
                    </div>
                );
            })}
            {isPopUpVisible && <BusPopUp onClose={handlePopUpClose} />}
        </div>
    );
};

export default BusList;