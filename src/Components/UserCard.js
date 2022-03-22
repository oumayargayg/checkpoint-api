import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UserCard = ({user}) => {
    return (
        <div className='stylcard' >
            <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.all-free-download.com/images/graphiclarge/lady_portrait_avatar_template_elegant_sketch_cartoon_character_6849751.jpg" />
    <Card.Body>
        <Card.Title> {user.name} </Card.Title>
        <Card.Text> {user.username} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Card.Text> {user.phone} </Card.Text>

        <Button  variant="primary">
            <Link to={`/user/${user.id}`} > Go check more </Link>
            </Button>
    </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
