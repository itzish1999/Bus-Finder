import { useDispatch } from "react-redux";
import { getSelectedBus } from "../selected-bus/selectedBus-slice";

const BusList = ({ buses }) => {
    const dispatch = useDispatch();

    const handleBusClick = (bus) => {
        console.log("Clicked!");
        dispatch(getSelectedBus(bus));
    }

    return (
        <div>
            {buses.map(bus => {
                const { stopName, busDirection } = bus;
                return bus.busRoutes.map(route => {
                    const { routeId, busName, routeName } = route;

                    return (
                        <p key={routeId} onClick={() => handleBusClick(bus)}>
                            <b>Stop:</b> {stopName} - <b>Bus:</b> {busName} - <b>Direction:</b> {busDirection} - <b> Route Name:</b> {routeName}
                        </p>
                    )
                });
            })}
        </div>
    )
}

export default BusList;