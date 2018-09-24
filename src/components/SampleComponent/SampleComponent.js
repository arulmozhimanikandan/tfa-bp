import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'

const styles = {
    button: {
        padding: '.5em 1.5em',
        color: '#666',
        backgroundColor: '#fff',
    }
}

/**
 * Sample component for tfa library
 */
function SampleComponent({color, size, onClick, show, children, classes}) {

    return (
        <h1 className={classes.button} style={styles} onClick={onClick} >
            {children}
        </h1>
    );
}

SampleComponent.propTypes = {
    /** component content */
    children: PropTypes.node.isRequired,
    /** The color for the text */
    color: PropTypes.string,
    /** The size of the text */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    /** show button */
    show: PropTypes.bool,
    /** Gets called when the user clicks on the component */
    onClick: PropTypes.func,
};
SampleComponent.defaultProps = {
    color: '#333',
    size: 'normal',
    onClick: event => {
        // eslint-disable-next-line no-console
        console.log('You have clicked me!', event.target);
    },
};
SampleComponent.sizes = {
    small: '10px',
    normal: '14px',
    large: '18px',
};

const StyledButton = injectSheet(styles)(SampleComponent)
export default StyledButton
