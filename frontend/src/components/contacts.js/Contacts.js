import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';

import './Contacts.css';

import Contact from './contact.js/Contact';

const Contacts = () => {

    const { error, loading, users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();  

    useEffect(() => {
        dispatch(userActions.fetchAllUsersRequest());
    }, [dispatch])

    return (
        <div className="contacts">
            {!loading &&
                users.map((item, index) => (
                    <Contact
                        firstName={item.firstName}
                        lastName={item.lastName}
                        phone={item.phone}
                    />
                ))
            }
            {loading &&
                console.log("loading")
            }
        </div>
    )
}

export default Contacts;