import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClickFunc = () => {
        console.log('click')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='hello' onClickFunc={onClickFunc}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;

/* test 1 */