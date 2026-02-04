import LikeButton from './like-button';

function Header({ title }: { title: string }) {
    return <h1>{title}</h1>;
}

function Paragraph() {
    return <p>This is a paragraph</p>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Props title: Develop. Preview. Ship." />
            <Paragraph />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}
