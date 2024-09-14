function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let time = 0;
    let current_weight = 0;
    
    while (truck_weights.length > 0 || current_weight > 0) {
        time++;
        
        const exiting_truck = bridge.shift();
        
        current_weight -= exiting_truck;
        
        if (truck_weights.length > 0) {
            if (current_weight + truck_weights[0] <= weight) {
                const new_truck = truck_weights.shift();
                
                bridge.push(new_truck);
                current_weight += new_truck;
            } else {
                bridge.push(0);
            }
        }
    }
    
    return time;
}
