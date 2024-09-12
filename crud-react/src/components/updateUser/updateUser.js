import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {Form,Button} from 'react-bootstrap'
import './updateUser.css'
const UpdateUser= () => {
    const { id }= useParams()
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:""
    })

    useEffect(() => {
        const fetchUser= async () =>{
            try {
                const response= await fetch(`http://localhost:5000/api/user/${id}`)
                const data = await response.json()
                setFormData(data)
            } catch (error) {
                console.error(`error while fetching users: ${error.message}`);
                
            }
        }
        fetchUser()
    }, [id])

    const handelInputChange= (event) =>{
        const {name, value}= event.target   
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return (
        <>
            <div className='center-form'>
                <h1>Update User</h1>
                <Form>
                    <Form.Group controlId='formBasicName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            placeholder='Enter Name'
                            value={formData.name}
                            onChange={handelInputChange}
                            />
                    </Form.Group>

                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            value={formData.email}
                            onChange={handelInputChange}
                            />
                    </Form.Group>

                    <Form.Group controlId='formBasicPhone'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type='text'
                            name='phone'
                            placeholder='Enter Phone'
                            value={formData.phone}
                            onChange={handelInputChange}
                            />
                    </Form.Group>

                    <Button variant='dark' type='submit' className='w-100'>
                        Update User
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UpdateUser;