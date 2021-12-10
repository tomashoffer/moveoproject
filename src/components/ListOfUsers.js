import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Spinner from "./Spinner/Spinner";
import {useNavigate} from "react-router-dom";

const ListOfUsers = () => {

 const [user, setUser] = useState([]);
const [currentpage, setCurrentPage] = useState(1) 
const [order, setOrder] = useState('ASC') 
const [spinner, setSpinner] = useState(false) 

let history = useNavigate()

  useEffect(() => {
    const getData = async () => {
 await axios.get(`https://randomuser.me/api/?page=${currentpage}&results=10&seed=foobar`)
  .then(function (response) {
    setUser(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  })
}
getData()
  }, [currentpage])


 const handleChange = (event, value) => {
     try {
        setCurrentPage(value);
        setSpinner(true)
            setTimeout(()=>{
            setSpinner(false)
            }, 1000)
     } catch (error) {
         console.log(error)
     } 
  };

  const handleProfile = user => {
      try {  
        localStorage.setItem('user', JSON.stringify(user));
        history(`/${user.login.username}`)          
      } catch (error) {
          console.log(error)
      }    
  }

  const sortData = col => {
      try {
           if(order === "ASC"){
        if(col === "name.first"){
         const sortedData = user.sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
          setUser(sortedData)
          setOrder('DSC')
      }
      if(col === "email"){
         const sortedData = user.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
          setUser(sortedData)
          setOrder('DSC')
      }
      if(col === "gender"){
          const sortedData = user.sort((a,b) => (a.gender > b.gender) ? 1 : ((b.gender > a.gender) ? -1 : 0));
          setUser(sortedData)
          setOrder('DSC')
      }
      if(col === "dob.age"){
           const sortedData = user.sort((a,b) => (a.dob.age > b.dob.age) ? 1 : ((b.dob.age > a.dob.age) ? -1 : 0));
          setUser(sortedData)
          setOrder('DSC')
        }
      }
      if(order === "DSC"){
        if(col === "name.first"){
         const sortedData = user.sort((a,b) => (a.name.first < b.name.first) ? 1 : ((b.name.first < a.name.first) ? -1 : 0));
          setUser(sortedData)
          setOrder('ASC')
      }
      if(col === "email"){
         const sortedData = user.sort((a,b) => (a.email < b.email) ? 1 : ((b.email < a.email) ? -1 : 0));
          setUser(sortedData)
          setOrder('ASC')
      }
      if(col === "gender"){
          const sortedData = user.sort((a,b) => (a.gender < b.gender) ? 1 : ((b.gender < a.gender) ? -1 : 0));
          setUser(sortedData)
          setOrder('ASC')
      }
      if(col === "dob.age"){
           const sortedData = user.sort((a,b) => (a.dob.age < b.dob.age) ? 1 : ((b.dob.age < a.dob.age) ? -1 : 0));
          setUser(sortedData)
          setOrder('ASC')
            }
        }
      } catch (error) {
          console.log(error)
      }    
  }

    return ( 
        <>
            <h1 className="titles">All Users</h1>
            <div>
            {spinner ? (<div><Spinner/></div>) 
            : 
             <Table  striped bordered hover responsive="xl" variant="dark">
                <thead >
                    <tr>
                    <th>Picture </th>
                    <th onClick={()=> sortData('name.first')}>Full Name<i className="fa fa-fw fa-sort"></i></th>
                    <th onClick={()=> sortData('email')}>Email<i className="fa fa-fw fa-sort"></i> </th>
                    <th onClick={()=> sortData('gender')}>Gender<i className="fa fa-fw fa-sort"></i></th>
                    <th onClick={()=> sortData('dob.age')}>Age<i className="fa fa-fw fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                {user.map((el) =>(
                    <tr key={el.login.username} onClick={() => handleProfile(el)}>
                    <td><img src={el.picture.medium} alt="imgUser"/></td>      
                    <td>{el.name.first.charAt(0)}. {el.name.last}</td>
                    <td><a href={`mailto:${el.email}`} className="links">{el.email}</a></td>
                    <td>{el.gender}</td>
                    <td>{el.dob.age}</td>
                    </tr>
                ))}
                    
                </tbody>
                </Table>
            }
               
            </div>
            <div>
                <Stack spacing={2} style={{textAlign: 'center'}}>
                    <Typography>Page: {currentpage}</Typography>
                    <Pagination count={10} currentpage={currentpage} onChange={handleChange} className="pagination" />
                </Stack>
            </div>
        </>
     );
}
 
export default ListOfUsers;