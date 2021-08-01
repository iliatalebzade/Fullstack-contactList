import './Container.css'

import Contacts from '../contacts.js/Contacts';

const Container = () => {
    return (
        <div className="container-hitbox">
            <div className="container">
                <h1>Contacts</h1>
                <Contacts />
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="addBtn">+</div>
        </div>
    )
}

export default Container
