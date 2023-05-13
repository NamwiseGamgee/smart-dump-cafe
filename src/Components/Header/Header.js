import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <h4>SmartDumpCafe</h4>
                </div>
                <div>
                    <img className='dp' src="girl.jpg" alt="" />
                </div>
            </div>
            <hr className='header-hr' />
        </div>
    );
};

export default Header;