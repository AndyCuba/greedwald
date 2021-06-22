const TOGGLE_INVENTORY = 'TOGGLE_INVENTORY';

const inventorySelector = state => state.inventory.isOpen;

const ACTION_TOGGLE_INVENTORY = {
    type: TOGGLE_INVENTORY
};

const initialInventoryState = {
    isOpen: false
};

const inventoryReducer = (state = initialInventoryState, action) => {
    switch (action.type) {
        case TOGGLE_INVENTORY:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return { ...state };
    };
};

export { 
    ACTION_TOGGLE_INVENTORY, 
    inventoryReducer, 
    inventorySelector 
};