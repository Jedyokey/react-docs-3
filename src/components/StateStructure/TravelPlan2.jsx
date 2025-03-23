import React, { useState } from 'react'
import { initialTravelPlan } from '../../JS/places'
// import PlaceTree from './PlaceTree';

const TravelPlan2 = () => {
    const [plan, setPlan] = useState(initialTravelPlan);

    const handdleComplete = (parentId, childId) => {
        const parent = plan[parentId];
        // Create a new version of the parent place
        // that doesn't include this child ID. 
        const nextParent = {
            ...parent, childIds: parent.childIds.filter(id => id !== childId)
        };
        // Update the root state object... 
        setPlan({
            ...plan, // ...so that it has the updated parent.
            [parentId]: nextParent
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;

  return (
    <div>
        <h3>Places to visit</h3>
        <ol>
            {planetIds.map(id => (
                <PlaceTree2 
                    key={id}
                    id={id}
                    parentId={0}
                    placesById={plan}
                    onComplete={handdleComplete}
                />
            ))}
        </ol>
    </div>
  )
}

export default TravelPlan2


const PlaceTree2 = ({ id, parentId, placesById, onComplete }) => {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <>
            <li>
                {place.title}
                <button onClick={() => {
                    onComplete(parentId, id);
                }}>
                    Complete
                </button>

                {childIds.length > 0 && 
                    <ol>
                        {childIds.map(childId => (
                            <PlaceTree2
                                key={childId}
                                id={childId}
                                parentId={id}
                                placesById={placesById}
                                onComplete={onComplete}
                            />
                        ))}
                    </ol>
                }
            </li>
        </>
    )
}