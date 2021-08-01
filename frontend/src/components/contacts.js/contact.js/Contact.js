import './Contact.css';

const Contact = ({ firstName, lastName, phone }) => {
    return (
        <div className="contact">
            <h4>Name: {firstName} {lastName}</h4>
            <h4>Phone: {phone}</h4>
            <div>
                <button className="contact__viewBtn">View</button>
                <button className="contact__deleteBtn">Delete</button>
            </div>
        </div>
    )
}

export default Contact;