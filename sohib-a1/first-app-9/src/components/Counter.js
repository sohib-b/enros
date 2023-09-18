import React, { useState } from "react";
function Counter() {

    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button
                className="btn btn-success"
                onClick={() => {
                    setCounter(counter + 1);
                }
                }>+  </button>
            <h1>{counter}</h1>

            <button
                className="btn btn-danger"
                onClick={() => {
                    setCounter(counter - 1);
                }
                }>-  </button>




            <button
                className="btn btn-danger"
                onClick={() => {
                    setCounter(0);
                }
                }>Reset  </button>

        </div>




    )

}
export default Counter;
