import sampleData from '../sampleData.json';
import Person from './Person';

const SubContent = () => {
    return(
        <>
            {sampleData.map(person => (
                <Person key={person.id} name={person.name} address={person.address.city}/>
            ))};
        </>
    );
};

export default SubContent;