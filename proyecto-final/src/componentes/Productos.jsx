import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function fundaRick() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://static.thcdn.com/images/large/original/productimg/1600/1600/11887865-1914612622119491.jpg" />
            <Card.Body>
                <Card.Title>Funda de Rick</Card.Title>
                <Card.Text>
                    Funda de Rick para dispositivos telefonicos marca Samsung 

                    precio: $2000
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default fundaRick;