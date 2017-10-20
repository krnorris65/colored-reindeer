//generating reindeer object with color
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
    //generator function for the colors
    const colorGenerator = function* () {
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];
        let counter = 0;
    
        while (counter < colors.length) {
            yield currentColor = colors[counter];
            counter += 1
        }
    }
    const nextColor = colorGenerator(); //calling the color generator
    const coloredReindeer = []; 
    
    // Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
        let currentReindeer = reindeer[i];
        
        // Invoke factory function to create reindeer object
        const reindeerFactory = function () {
            return Object.create(null, {
                "name" : {
                    "value" : currentReindeer, //value of name is the current reindeer in the array
                    "enumerable": true},
                "color" : {
                    "value" : nextColor.next().value, //value is the next color in the array
                    "enumerable": true}
            }); 
        }
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(reindeerFactory()); //calls function and inserts it into the array
        
    }

    // Return coloredReindeer array
    return coloredReindeer; //after the for loop has run through all of the reindeer, the function returns the array of names & colors
}
