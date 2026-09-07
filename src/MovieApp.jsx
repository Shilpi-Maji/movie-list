import { Card, Col, Container, Row } from "react-bootstrap";

const MovieApp = ({movieData}) => {
  return (
    <Container>
     <Row className="gy-4">
        {movieData.map((item,index)=> <MovieItems data={item} key={index}/>)}
     </Row>
      
    </Container>
  );
};

export default MovieApp;


function MovieItems({data}){
    let imagePath=`https://image.tmdb.org/t/p/w1280${data.poster_path}`
    return(
       <Col lg={3}>
          <Card>
            <Card.Img variant="top" src={imagePath} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
               {data.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>  
    )
}
