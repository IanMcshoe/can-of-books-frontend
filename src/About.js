import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <div className="ps-4">
        <h2>About the Developers</h2>
        <div className="d-flex flex-row">
          <Row>
            <Col className="about-us d-inline">
              <Card style={{ width: '18rem' }}>
                <Card.Title className="text-muted ps-3 pt-3">
                  Ian Forrester
                </Card.Title>
                <Card.Body>
                  <Card.Text className="pt=0">
                    Ian is a prospective Software Developer with a background in
                    military service and over 5 years of hands on training and
                    experience. Excellent communication, and critical thinking
                    skills, always ready and eager to tackle new problems and
                    gain more knowledge.
                  </Card.Text>
                  <Card.Link href="https://github.com/IanMcshoe">
                    GitHub
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="about-us d-inline">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className="text-muted pb-3">
                    Chris Fanucchi
                  </Card.Title>
                  <Card.Text>
                    Chris is long-time IT professional, with 17 years in the
                    tech industry as a software developer and network engineer.
                    He also spent 12 years in the FBI as a Special Agent, where
                    he had an opportunity to gain more experience with
                    cybersecurity and manage large, multi-agency projects. What
                    excites Chris most in any job is solving problems and
                    bringing success to the organization and team. He has always
                    loved programming, since he was in 3rd grade, and has
                    experience with multiple computer languages, to include
                    JavaScript, Python and PHP. Chris is currently looking for a
                    position in software development as either a software
                    engineer or development team leader.
                  </Card.Text>
                  <Card.Link href="https://github.com/Vigilos">
                    GitHub
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
