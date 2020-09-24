import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

export default function Index (props) {
  const [questions, updateQuestions] = useState([]);
  const [change, setChange] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/questions', )
      const response2 = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/answers')
      const response3 = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/answers')
      const response4 = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/answers')
      const response5 = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/answers')
    } catch (error) {
      console.error(error);
    }
  }

  useEffect (() => {
    async function fetchData() {
      const response = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/questions');
      updateQuestions(response.data);
    }
    fetchData();
    setChange(false);
  }, [change]);

  return (
    <Container>
      {
        questions.map((set, i) => {
          return (
            <div key={i}>
              <h3>{set.question.text}</h3>
              <h5>{set.answers[0].text}</h5>
              <h5>{set.answers[1].text}</h5>
              <h5>{set.answers[2].text}</h5>
              <h5>{set.answers[3].text}</h5>
            </div>
          )
        })
      }
    </Container>
  )
}