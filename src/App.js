import 'bootstrap/dist/css/bootstrap.min.css';
import EntryForm from './components/EntryForm';
import WorkBook from './components/WorkBook';
import { useState, useEffect, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header';

function App() {
  const [entries, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchEntryHandler = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch('https://react-workbook-default-rtdb.firebaseio.com/entries.json')
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const fetchedEntries = [];

      for (const key in data) {
        fetchedEntries.push({
          id: key,
          eid: data[key].eid,
          firstname: data[key].firstname,
          lastname: data[key].lastname,
          email: data[key].email,
          birthdate: data[key].birthdate
        });
      }
      setData(fetchedEntries);
    } catch (error) {
      setError(error.message)
    }
  }, []);

  useEffect(() => {
    fetchEntryHandler();
  }, [fetchEntryHandler, addEntryHandler]);

  async function addEntryHandler(entry) {
    const response = await fetch('https://react-workbook-default-rtdb.firebaseio.com/entries.json', {
      method: 'POST',
      body: JSON.stringify(entry),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  return (
    <Container>
      <Header/>
      <Row>
        <Col>
          <EntryForm onAddEntry={addEntryHandler} />
        </Col>
      </Row>
      <Row className="app">
        <Col>
          <WorkBook entries={entries} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
