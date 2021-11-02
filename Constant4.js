/*const in objects */

const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable
MY_OBJECT.key = 'otherValue1';