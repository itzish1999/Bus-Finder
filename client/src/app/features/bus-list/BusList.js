const BusList = ({ buses }) => {

    return (
        <div>
            {buses.map(bus => {
                const { stopName, busDirection } = bus;
                return bus.busRoutes.map(route => {
                    const { routeId, busName, routeName } = route;

                    return (
                        <p key={routeId}>
                            <b>Stop:</b> {stopName} - <b>Bus:</b> {busName} - <b>Direction:</b> {busDirection} - <b> Route Name:</b> {routeName}
                        </p>
                    )
                });
            })}
        </div>
    )
}

export default BusList;