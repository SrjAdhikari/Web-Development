//* ****************************************************
//* Map In JavaScript
//* ****************************************************


//* **********************************************************************
    //* The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

    //* The correct usage for storing data in the Map is through the set(key, value) method.
//* **********************************************************************


//* ******************************* Example ******************************
    //* Map creation as objects, using the Map() constructor:
    const map = new Map();

    //* Insert key value pairs using set() method
    map.set('a', 1);
    map.set('b', 1);
    map.set('c', 1);

    console.log(map);               // Output -> Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
    console.log(map.get('a'));      // Output -> 1
    console.log(map.size);          // Output -> 3

    //* Update value of key 'a'
    map.set('a', 'Suraj');
    console.log(map.get('a'));      // Output -> Suraj

    //* Delete pair from map
    map.delete('b');

    //* Print size of map after deletetion
    console.log(map.size);          // Output -> 2


//* *********************** Iterating Map with for...of *******************
    const map1 = new Map();

    //* Insert key value pairs using set() method
    map1.set("A", 65);
    map1.set("B", 66);
    map1.set("C", 67);
    map1.set("D", 68);
    map1.set("E", 69);

    // Print data of map using for...of loop
    for (const key of map1) {
        console.log(key);                       // Output -> [ 'A', 65 ] [ 'B', 66 ] [ 'C', 67 ] [ 'D', 68 ] [ 'E', 69 ]
    }

    // Print data of map using for...of loop
    for (const [key, value] of map1) {
        console.log(key, ':-', value);          // Output -> A :- 65 B :- 66 C :- 67 D :- 68 E :- 69
    }

    // Print keys of map using for...of loop
    for (const key of map1.keys()) {
        console.log(key);
    }

    // Print values of map using for...of loop
    for (const value of map1.values()) {
        console.log(value);
    }