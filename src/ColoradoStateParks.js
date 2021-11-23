import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
