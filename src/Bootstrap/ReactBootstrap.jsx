import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function ReactBootstrap() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://cdn3d.iconscout.com/3d/free/thumb/free-apple-3d-icon-png-download-2797135.png" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn3d.iconscout.com/3d/free/thumb/free-android-3d-icon-png-download-2797139.png?f=webp" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}
