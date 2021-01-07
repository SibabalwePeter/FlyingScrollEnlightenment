import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col
  } from 'reactstrap';

  
import ArtsPicture from '../Pictures/Arts.jpg';
import Science from '../Pictures/Science.jpeg';
import Farming from '../Pictures/Farming.jpeg';
import Law from '../Pictures/Law.jpeg';
import Industrial from '../Pictures/Industrial.jpeg';
import Accounting from '../Pictures/Accounting.jpeg';
import Hospitality from '../Pictures/Hospitality.jpeg';
import SocialWorker from '../Pictures/SocialWorker.jpeg';
import CityPlanning from '../Pictures/CityPlannng.jpeg';
import Architecture from '../Pictures/Architecture.jpeg';
import Education from '../Pictures/Education.jpeg';
import RealEstate from '../Pictures/RealEstate.jpeg';
import IT from '../Pictures/IT.jpeg';
import Finance from '../Pictures/Finance.jpeg';
import HealthSciences from '../Pictures/HealthSciences.jpeg';
import Transportation from '../Pictures/Transportation.jpeg';
import Animals from '../Pictures/Animals.jpeg';


function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const PractitionerCareers =()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Arts, A/V Technology and Communications" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Arts, A/V Technology and Communications</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in creative or performing arts, communication or A/V technology</CardSubtitle>
            <CardText>
                Actor &bull;
                Art &bull;
                Broadcast &bull;
                Camera Operator &bull;
                Composer and Music &bull;
                Film and Video &bull;
                Cartographer &bull;
                News Reporter &bull;
                Photographer &bull;
                Producer and Director &bull;
                Set and Exhibit Designer &bull;
                Technical Writer &bull;
                Graphic Designer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
export default PractitionerCareers;

