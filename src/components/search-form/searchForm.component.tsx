import React, { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "../search-form/searchform.styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../store/types";
import { searchLocationAction } from "../../store/actions";
function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const inputLocation = useSelector((state: Store) => state.location);

  const locationDispatch = useDispatch();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInputValue = inputValue.toLocaleLowerCase();
    //console.log(inputLocation);
    locationDispatch(searchLocationAction(userInputValue));
  };
  return (
    <Container className="search-form__container">
      <Row className="search-form__container-row">
        <Col>
          <Form
            className="search-form__input-form"
            onSubmit={(e) => submitForm(e)}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                name="location"
                placeholder="Enter Location"
                required
              />
            </Form.Group>
            <Button type="submit">Submit Location</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
