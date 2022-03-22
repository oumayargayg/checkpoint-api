import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
    const {id} =useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
            .then((res) => setUser(res.data[0]))
            .catch((err) => console.log(err)) 
    })
    
    return (
        <div>
            <h2> Profile User </h2>
            <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.all-free-download.com/images/graphiclarge/lady_portrait_avatar_template_elegant_sketch_cartoon_character_6849751.jpg" />
    <Card.Body>
        <Card.Title> {user.name} </Card.Title>
        <Card.Text> {user.username} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Card.Text> {user.phone} </Card.Text>

        <Button  variant="primary">
            <Link to={`/users`} > Go back </Link>
            </Button>
    </Card.Body>
</Card>
        </div>
    )
}

export default Profile