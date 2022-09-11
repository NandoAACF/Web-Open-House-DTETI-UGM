import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase.js";

const GetInTouch = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const dbReff = collection(db, "get-in-touch");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addDoc(dbReff, {
            name: name,
            email: email,
        })
        .then(() => {
            alert("Your message has been submitted");
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
    };

    return (
        // TODO: benerin formnya cuy ini jelek bgt wkwk
        <form onSubmit={ handleSubmit }>
        <label> Name: </label>
        <input placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <label> Email: </label>
        <input placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
        </form>
    );
}

export default GetInTouch;