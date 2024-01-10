import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabbs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="main" title="Main">
        Tab content for Main
      </Tab>
      <Tab eventKey="dev" title="dev">
        Tab content for dev
      </Tab>
      <Tab eventKey="food" title="food">
        Tab content for food
      </Tab>
      <Tab eventKey="childcare" title="childcare">
        Tab content for childcare
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Tabbs;