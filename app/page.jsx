import { useState } from 'react';

function Header(props) {
    return <h1>{props.title}</h1>;
}

function Paragraph() {
    return <p>This is a paragraph</p>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Props title: Develop. Preview. Ship." />
            <Paragraph />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
