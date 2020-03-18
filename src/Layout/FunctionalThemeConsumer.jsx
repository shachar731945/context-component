import React from 'react';
import ThemeContext from '../Contexts/ThemeContext';

const FunctionalThemeConsumer = () => (
    <ThemeContext.Consumer>
        {context => <div className={context.theme}>FunctionalThemeConsumer</div>}
    </ThemeContext.Consumer>
);

export default FunctionalThemeConsumer;