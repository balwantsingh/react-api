import React, { useState, useEffect, Fragment } from 'react'
import { Table } from 'react-bootstrap'
function Users() {

    const [user, setUser] = useState([])

    useEffect(()=> {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((data)=> {
            //console.warn("data", data)
            data.json().then(result=> {
                console.warn("result", result)
                setUser(result.data)
            })
        })
    },[])

    // const [user, setUser] = useState([
    //     { name: 'Neeraj', age: '28', address: 'Noida' },
    //     { name: 'Sandeep', age: '68', address: 'Delhi' },
    //     { name: 'James', age: '20', address: 'Gurgaon' },
    //     { name: 'Peter', age: '58', address: 'UK' },
    //     { name: 'Shambhu', age: '48', address: 'Chandigarh' },
    // ])
    return (
        <Fragment>
            <div className="container">
            <h1 className="text-success display-4 font-weight-bold">Clients</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                    {
                        user.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>

                            </tr>
                        )
                    }
                </thead>
                <tbody>
                 
                </tbody>
            </Table>
            </div>
        </Fragment>

    )
}

export default Users;