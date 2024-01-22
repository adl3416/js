import React, {useState} from 'react'
import data from "./people.json"
import { Button, Container } from 'react-bootstrap';
import PersonCard from './person-car';


const Birthday = () => {
  const [people, setPeople] = useState(data);

  const deletePerson= (id) =>{
    const arr =people.filter((item)=> item.id !== id);
    setPeople(arr);
     
  }
    
  
  return (
    <Container>
      
      <h1>Bugün doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu</p>

      {people.map(item=> (<PersonCard {...item} key={item.id} deletePersonProp={deletePerson}/>
      ) )} 

      {/* yada bu sekilde          {people.map(item=><PersonCard name={item.name} age={item.age} image={item.image} key={item.id}/>)} */}
           
       <Button variant="danger" onClick={()=>setPeople([])}>Remove All</Button>
       <Button variant='success' onClick={()=>setPeople(data)}> ReLoad Data</Button>
       <Button variant='success' onClick={()=>setPeople([data[0]])}>1. resmi Getir</Button>
       
      
    </Container>
  )
}
export default Birthday