import Accordion from "./components/Accordion";

export default function App() {
    const items = [
        {
            id: 'id1',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want'
        },
        {
            id: 'id2',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript on any project you want'
        },
        {
            id: 'id3',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want'
        },
    ]
    return (
        <Accordion items={items} />
    );
}