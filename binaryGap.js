function solution(N) {
    
    // Counters
    let currentGap = 0;
    let bGap = 0;
    
    // Need a string to parse:
    let numToString = N.toString(2);

    // Start point:
    let startFromEnd = numToString.length - 1;

    // Loop over the string
    for (startFromEnd; startFromEnd >= 0; startFromEnd--){
        // Check the current character if its 0 or 1
        if (numToString.charAt(startFromEnd) != "0"){
            break;
        }
    }
    let count = startFromEnd - 1;
    for (count; count >= 0; count --){
        // Add to a counter
        if (numToString.charAt(count) == "0"){
            currentGap = currentGap + 1;
        } else {
            // only save the highest gap
            if (currentGap > bGap){
                bGap = currentGap;
            }
            // Reset counter for the loop.
            currentGap = 0;
        }
    }
    return bGap;
}

solution(100011111000011100000000111100);