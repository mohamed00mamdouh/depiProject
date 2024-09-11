import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row, Table, Container } from 'react-bootstrap';

const Dashboard= () => {
    const [users, setUsers]= useState([])
    useEffect(() => {
        const fetchUsers= async () =>{
            try {
                const response= await fetch("http://localhost:5000/api/user")
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error(`error while fetching users: ${error.message}`);
                
            }
        }
        fetchUsers()
    }, [])
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Dashboard Component</h1>
                        <Table striped border hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) =>(
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard