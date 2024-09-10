import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import './postUser.css'
const PostUser= () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:""
    })

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
    }

    return (
        <>
            <div className='center-form'>
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