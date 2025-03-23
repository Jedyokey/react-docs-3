// import React, { useState } from 'react'
// import { initialTravelPlan } from '../../JS/places'
// import PlaceTree from './PlaceTree';

// const TravelPlan = () => {
//     const [plan, setPlan] = useState(initialTravelPlan);

//     const root = plan[0];
//     const planetIds = root.childIds;

//   return (
//     <div>
//         <h2 className='heading'>Avoid deeply nested state</h2> 
//         <h3>Places to visit</h3>
//         <ol>
//             {planetIds.map(id => (
//                 <PlaceTree 
//                     key={id}
//                     id={id}
//                     placesById={plan} 
//                 />
//             ))}
//         </ol>
//     </div>
//   )
// }

// export default TravelPlan


import React, { useState } from 'react';
import { initialTravelPlan } from '../../JS/places';
import PlaceTree from './PlaceTree';

const TravelPlan = () => {
    const [plan, setPlan] = useState(initialTravelPlan);

    // Access the root node (id: 0)
    const root = plan[0];
    const planetIds = root.childIds;

    return (
        <div>
            <h2 className='heading'>Avoid deeply nested state</h2> 
            <h3>Places to visit</h3>
            <ol>
                {planetIds.map(id => (
                    <li key={id}>
                        <PlaceTree 
                            id={id}
                            placesById={plan} 
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TravelPlan;