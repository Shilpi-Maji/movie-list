// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SearchForm = ({searchFormObj}) => {
    // const [movieTitle,setMovieTitle]=useState("")

    function handleChange(e){
    // console.log(e.target.value)
    searchFormObj.setTitle(e.target.value)
    }
    return (
    <Container className="py-4">
        <Row>
            <Col xs={12}>
            <input type="text" className="form-control py-3" placeholder="Search Movie" value={searchFormObj.title} onChange={handleChange}/>
            </Col>
        </Row>
    </Container>
)
}


export default SearchForm;