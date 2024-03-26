// Define an array of animals called data. Use a `.map()` to return a list of all the animals in the data array.

const data = [
    { id: 1, name: 'Fido 🐕' },
    { id: 2, name: 'Snowball 🐈' },
    { id: 3, name: 'Murph 🐈‍⬛' },
    { id: 4, name: 'Zelda 🐈' },
  ];

const Loops = () => {
    return (
        <ul>
            {
                data.map(({id, name}) => {
                    return <li key={id}>{name}</li>
                })
            }
        </ul>
    )
};

export default Loops;