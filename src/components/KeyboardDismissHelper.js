import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardDismissHelper = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default KeyboardDismissHelper;
