import React from 'react';

const PlaceTree = ({ id, placesById }) => {
    // Get the place object using the id
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <div>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <li key={childId}>
                            <PlaceTree
                                id={childId}
                                placesById={placesById} 
                            />
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default PlaceTree;