import React from 'react';

const ContactItem = (props) => {

    return (
        <tr>
            <td><img src={props.pictureUrl} alt="" /> </td>
            <td>{props.name} </td>
            <td>{(props.popularity * 1).toFixed(2)}</td>
            <td><button onClick={() => props.deleteContact(props.popularity)}>delete</button></td>
        </tr>
    );
}

export default ContactItem;