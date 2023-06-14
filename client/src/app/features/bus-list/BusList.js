import { useDispatch } from "react-redux";
import { getSelectedBus } from "../selected-bus/selectedBus-slice";

const BusList = ({ buses }) => {
    const dispatch = useDispatch();

    const handleBusClick = (bus) => {
        dispatch(getSelectedBus(bus));
    }

    return (
        <div className="card-container">
            {buses.map((bus) => {
                const { stopName, busDirection, busRoutes } = bus;
                const busNames = busRoutes.map((route) => route.busName).join(", ");

                return (
                    <div className="card-title" key={bus.stopId} onClick={() => handleBusClick(bus)}>
                        <h2> {stopName}</h2>
                        <div className="card-body">
                            <p><b>Direction:</b> {busDirection}</p>
                            <p><b>Buses:</b> {busNames}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BusList;