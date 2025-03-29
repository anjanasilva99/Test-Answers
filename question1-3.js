function objectProjection(source, prototype) {

    // Handle null or undefined inputs
    if (source === null || source === undefined) return {};
    if (prototype === null || prototype === undefined) return {};

    // Recursive projection function
    function deepProject(src, proto) {
        if (proto === null) return src;

        if (typeof src !== 'object' || typeof proto !== 'object') return undefined;

        const projection = {}; // Create projection object
        // Iterate through prototype keys
        for (const key in proto) {
            if (src.hasOwnProperty(key)) {
                const projectedValue = deepProject(src[key], proto[key]);
                if (projectedValue !== undefined) {
                    projection[key] = projectedValue;
                }
            }
        }
        return Object.keys(projection).length > 0 ? projection : undefined;
    }

    return deepProject(source, prototype) || {};     // Perform projection and return result (or empty object if no projection)
}

const source = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const prototype = {
    prop11: {
        prop22: null
    }
};


// Perform projection
const res = objectProjection(source, prototype);

// Output the result
console.log(JSON.stringify(res, null, 2));