import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import './postUser.css'
const PostUser= () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:""
    })
    const navigate=useNavigate()

    const handelInputChange= (event) =>{
        const {name, value}= event.target   
        setFormData({
            ...formData,
            [name]: value,
        })

    }
    const handelSubmit= async (e) =>{
        e.preventDefault()
        console.log("name", formData.name)
        console.log("email", formData.email)
        console.log("phone", formData.phone)
        try {
            const response=await fetch("http://localhost:5000/api/user",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json(response)
            console.log(data)
            navigate("/")
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <div className='center-form'>
                <h1>Post New User</h1>
                <Form onSubmit={handelSubmit}>
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
                        Post User
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default PostUser;