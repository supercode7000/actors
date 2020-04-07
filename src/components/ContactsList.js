import React, { Component } from 'react';
import ContactItem from './ContactItem';
import contacts from '../contacts.json'

class ContactsList extends Component {
    state = {
        contact: contacts.slice(0, 5),
        toggle: true
    }
    addRandom = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        const contact = this.state.contact
        contact.push(randomContact)
        this.setState({ contact });
    }
    sortByName = () => {
        if (this.state.toggle) {
            const contact = this.state.contact.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
            this.setState({ contact });
            this.setState({ toggle: false })
        } else {
            const contact = this.state.contact.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
            this.setState({ contact });
            this.setState({ toggle: true })
        }

    }
    sortByPopularity = () => {
        const contact = this.state.contact.sort((a, b) => a.popularity < b.popularity ? 1 : a.popularity > b.popularity ? -1 : 0)
        this.setState({ contact });
    }
    deleteContact = (popularity) => {
        const contact = this.state.contact.filter(contact => contact.popularity !== popularity)
        this.setState({ contact });
    }
    render() {
        return (
            <section>
                <button onClick={this.addRandom}>Add random</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contact.map((contact, i) => <ContactItem
                            name={contact.name}
                            pictureUrl={contact.pictureUrl}
                            popularity={contact.popularity}
                            key={i}
                            deleteContact={this.deleteContact}
                        />)}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default ContactsList;