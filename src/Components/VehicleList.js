import React from 'react';
import Vehicle from './Vehicle';

{/* this component takes in a prop called vehicles, which is an array of vehicle strings */}
{/* map through the vehicles array in props */}
{/* for each item render a Vehicle component. Pass the vehicle string as a prop called vehicle to the Vehicle component.  */}
export default function VehicleList(props) {
  return (
    <div className="traffic">
      {props.vehicles.map((vehicle, i) => 
        <Vehicle key={vehicle + i} vehicle={vehicle} />)}
    </div>
  );
}
