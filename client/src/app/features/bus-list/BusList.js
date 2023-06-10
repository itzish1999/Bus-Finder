const BusList = ({ buses }) => {
    // const busRoutes = buses.map(bus => {
    //     return bus.busRoutes.map(route => {
    //         return {
    //             routeId: route.routeId,
    //             routeName: route.routeName
    //         }
    //     })
    // });
    // console.log("buses are :: ", buses)
    // console.log("busRoutes are :: ", busRoutes)

    return (
        <div>
            {buses.map(bus => {
                return (
                    <ul>
                        <li key={bus.routeId}>{bus.stopName} - {bus.busDirection} - {bus.routeName}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default BusList;