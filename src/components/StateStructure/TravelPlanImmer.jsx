import React from 'react'
import { useImmer } from 'use-immer';
import { initialTravelPlan } from '../../JS/places'

const TravelPlanImmer = () => {
    const [plan, updatePlan] = useImmer(initialTravelPlan);

    const handleComplete = (parentId, childId) => {
        updatePlan(draft => {
            // Remove from the parent place's child IDs.
            const parent = draft[parentId];
            parent.childIds = parent.childIds.filter(id => id !== childId);

            // Forget this place and all its subtree.
            deleteAllChildren(childId);
            const deleteAllChildren = (id) => {
                const place = draft[id];
                place.childIds.forEach(deleteAllChildren);
                delete draft[id];
            }
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;
  return (
    <div>
        <h2>Places to visit (Using Immer)</h2>
        <ol>
            {planetIds.map(id => (
                <PlaceTree3 
                    key={id}
                    id={id}
                    parentId={0}
                    placesById={plan}
                    onComplete={handleComplete}
                />
            ))}
        </ol>
      
    </div>
  )
}

export default TravelPlanImmer



const PlaceTree3 = ({ id, parentId, placesById, onComplete }) => {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            <button onClick={() => {
                onComplete(parentId, id)
            }}>
                Complete
            </button>

            {childIds.length > 0 && 
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree3 
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
    )
}