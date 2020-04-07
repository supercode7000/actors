import React from 'react';
import {
    Link
} from "react-router-dom";
const Contact = () => {
    return (
        <section>
            this is Contact
            <Link to="/contact/1">contact 1</Link>
            {/* <nav>
                <a href="home.html"></a>
                <a href="about.html"></a>
                <a href="contact.html"></a>
            </nav> */}
        </section>
    );
}

export default Contact;