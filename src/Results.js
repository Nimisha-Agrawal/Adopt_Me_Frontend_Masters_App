import Pet from './Pet'

const Results = ({pets}) => 
{
    return (
    <div className='search'>
        {!pets.length ? (<h2>No pets found!</h2>) :  (pets.map((pet) => {
      <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} images={pet.images} location={`${pet.city},${pet.state}`} id={pet.id}></Pet>
        }))//or could write like <Pet {...pet} key={pet.id} /> but this kind of listing props should be avoided as much as one can as it truly makes the code absolutely unreadable for anyone who will look at it in later times!!
        }
    </div>
    )
}

export default Results;