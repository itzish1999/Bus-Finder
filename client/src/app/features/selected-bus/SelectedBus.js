import { useSelector } from "react-redux";

const SelectedBus = () => {
    const selectBus = useSelector((state) => state.selectedBus);
    console.log("selected ", selectBus)

    return (
        <div>
            {selectBus.map(bus => {
                const { busDirection } = bus;
                <h1>Bus Stop Information:</h1>

                return bus.busRoutes.map(busInfo => {
                    const { routeName, busName } = busInfo;
                    return (
                        <div>
                            <p>Bus: {busName} Direction: {busDirection} Route: {routeName}</p>
                        </div>
                    )
                })
            })}
        </div>
    )
}

export default SelectedBus;