import * as React from 'react';
import { CardImg, Row, Container} from 'reactstrap';
import {
    Card, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
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

import PractitionerCareers from './PractitionerCareers'

class Practitioners extends React.PureComponent {
    public render() {
        return (
            <Container>
         <h2>Practitioners</h2>
                    <h5>Career Development Programme</h5>
                    <p>
                        Flying Scroll Enlightenment career development programme prepares high school learners to be more competitive in global economic activities
                        as 4IR integral strength of world economy. 
                    </p>
                    <p>
                        Our career development programme provides a method for schools to systematise guidelines and learner experiences around various
                        categories encompass virtually all occupations from entry through professional levels. These alignment of occupations are used as an
                        organizing tool for programme design, a model for guidance and instruction, and a mechanism for continuous transition from secondary
                        education to post-secondary education.
                    </p>
                    
                    <h5>Practitioners</h5>
                    <p>
                        A wide range of programmes and services provided in schools to assist learners to gain knowledge, skills, attitudes and behaviours to manage
                        their academics and world of work.
                    </p>
                    <h6>Programme Standards </h6>
                    <p>
                        Career development practitioners work in a range of occupations and of settings and providing services to schools, and post-school candidates.
                        A wide range of programmes a services provided in schools to assist learners to gain knowledge, skills, attitudes and behaviours to manage
                        their academics and world of work. 
                    </p>
                    <p>
                        Flying Scroll Enlightenment Career Development Programme Framework intentionally designed to support career programmes in fulfilling the
                        roles and accountabilities of career development practitioners and management team to:
                        <ul>
                            <li>Identify a career development plan with suitable holistic model fundamentals of the company to promote more effectiveness and productiveness.</li>
                            <li>Obtain systematic response on performance/work rate and progress against their career development plan.</li>
                            <li>Obtain an accredited development activities – postgraduate certificate/any related training certificate in academic practice.</li>
                            <li>Recognise an additional training skills from the company for understanding its holistic model and standard.</li>
                        </ul>
                    </p>
                    <h5>Practitioners</h5>
                    <p>
                        Career development supporting tools – gathered resources sets to help learners to make informed career decisions, and economical
                        exposure. Resources contains all content areas for specific activity module, and career cluster alignment.
                    </p>
                    <h6>Career Cluster Alignment</h6>
                    <p>
                        Career cluster is an organizational occupations and careers grouped to assist career practitioners in modifying rigorous career
                        programmes/activities for learners.
                    </p>
                    <p>
                        Arts, A/V Technology and Communications| Science, Technology, Engineering and Mathematics| Plants, Agriculture and Natural
                        Resources| Law, Public Safety, Corrections and Security| Manufacturing (Mechanical/Industrial)| Business, Management and
                        Administration| Marketing, Sales and Service| Hospitality and Tourism| Human Services| Government and Public Administration|
                        Architecture, Design and Construction| Education and Training| Finance, Banking, Investments and Insurance| Health Sciences, Care and
                        Prevention| Information Technology (IT)| Animals, Agriculture and Natural Resources| Transportation, Distribution and Logistics
                    </p>
                    <PractitionerCareers />
                    <CardDeck>
                        <Row className="mb-4">
                            
                            <Card >
                                <CardImg top width="100%" src={Science} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Science, Technology, Engineering and Mathematics</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in problem-solving, discovering, collecting and analysing information and applying findings to problems in science, math and engineering.</CardSubtitle>
                                <CardText>
                                    Aerospace Engineerbr&bull;
                                    Biologistbr&bull;
                                    Chemist&bull;
                                    Electrical and Electronics Engineer&bull;
                                     Geographer&bull;
                                    Petroleum Engineer &bull;
                                    Mechanical Engineer&bull;
                                    Meteorologist&bull;
                                    Physicist&bull;
                                    Safety Engineer
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Farming} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Plants, Agriculture and Natural Resources</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in activities involving plants, usually in an outdoor setting.</CardSubtitle>
                                <CardText>
                                    Agricultural Engineer&bull;
                                    Agricultural Scientist&bull;
                                    Animal Trainer&bull;
                                    Chef&bull;
                                    Conservation Scientist&bull;
                                    Farm Equipment Mechanic&bull;
                                    Fish and Game Warden&bull;
                                    Forester&bull;
                                    Veterinarian&bull;
                                    Zoologist
                                </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={Law} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Law, Public Safety, Corrections and Security</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in judicial, legal and protective services for people and property.</CardSubtitle>
                                <CardText>
                                    Coroner&bull;
                                    Corrections Officer&bull;
                                    Court Clerk&bull;
                                    Detective and Investigator&bull;
                                    Fire fighter&bull;
                                    Judge&bull;
                                    Lawyer&bull;
                                    Life Guard and Ski Patrolman&bull;
                                    Police Patrol Officer
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src={Transportation} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Transportation, Distribution and Logistics</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in the movement of people, and goods by road, pipeline, air, railroad or water.</CardSubtitle>
                                <CardText>
                                    Air Traffic Controller&bull;
                                    Airplane Pilot&bull;
                                    Automobile Mechanic&bull;
                                    Flight Attendant&bull;
                                    Motorboat Mechanic&bull;
                                    School Bus Driver&bull;
                                    Subway and Streetcar Operator&bull;
                                    Traffic Technician&bull;
                                    Transportation Agent
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Accounting} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Business, Management and Administration</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in organizing, directing and evaluating business functions.</CardSubtitle>
                                <CardText>
                                    Accountant&bull;
                                    Advertising Manager&bull;
                                    Computer Operator&bull;
                                    Court Reporter&bull;
                                    Management Analyst&bull;
                                    Meeting and Convention Planner&bull;
                                    Payroll Clerk&bull;
                                    Property and Real Estate Manager&bull;
                                    Shipping and Receiving Clerk&bull;
                                    Statistician
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Hospitality} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Hospitality and Tourism</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in providing services to others in travel planning and hospitality services in hotels, restaurants and recreation.</CardSubtitle>
                                <CardText>
                                    Baggage Porter and Bellhop&bull;
                                    Chef and Dinner Cook&bull;
                                    Food Service Worker&bull;
                                    Hotel Manager&bull;
                                    Janitor/Housekeeper Supervisor&bull;
                                    Reservation and Ticket Agent&bull;
                                    Restaurant Manager&bull;
                                    Tour Guide&bull;
                                    Travel Agent
                                </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={RealEstate} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Marketing, Sales and Service</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in bringing others to a point of view through personal persuasion, using sales or promotional techniques.</CardSubtitle>
                                <CardText>
                                    Advertising Salesperson&bull;
                                    Buyer and Purchasing Agent&bull;
                                    Customer Service Representative&bull;
                                    Floral Designer&bull;
                                    Market Research Analyst&bull;
                                    Public Relations Specialist&bull;
                                    Real Estate Agent&bull;
                                    Sales Manager&bull;
                                    Telemarketer
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={SocialWorker} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Human Services</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in helping others with their mental, spiritual, social, physical or career needs.</CardSubtitle>
                                <CardText>
                                    Child Care Worker&bull;
                                    Clergy&bull;
                                    Cosmetologist&bull;
                                    Counsellor&bull;
                                    Funeral Director&bull;
                                    Manicurist&bull;
                                    Professional Makeup Artist&bull;
                                    Financial Adviser&bull;
                                    Psychologist&bull;
                                    Residential Counsellor&bull;
                                    Social Worker
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={CityPlanning} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Government and Public Administration</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in performing government functions at the local, state or federal level.</CardSubtitle>
                                <CardText>
                                    City Planning Aide Construction/Building&bull;
                                    Inspector Interpreter and Translator&bull;
                                    License Clerk&bull;
                                    Occupational Health Specialist&bull;
                                    Tax Examiner
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src={Education} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Education and Training </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in planning, managing and providing educational services, including support services, library and information services.</CardSubtitle>
                                <CardText>
                                    Audio/Visual Specialist&bull;
                                    Coach and Sports Instructor&bull;
                                    College/University Administrator&bull;
                                    Teacher/Professor&bull;
                                    Librarian&bull;
                                    Public Health Educator&bull;
                                    Special Education Teacher&bull;
                                    Speech Pathologist
                                </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card >
                                <CardImg top width="100%" src={Architecture} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Architecture, Design and Construction</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in designing, planning, managing, building and maintaining physical structures.</CardSubtitle>
                                <CardText>
                                        Architect&bull;
                                        Cabinetmaker&bull;
                                        Carpenter&bull;
                                        Construction Manager&bull;
                                        Electrician&bull;
                                        Civil Engineer&bull;
                                        General Construction Worker&bull;
                                        Highway Maintenance Worker&bull;
                                        Interior Designer&bull;
                                        Sheet Metal Worker Surveying and Mapping&bull;
                                        Technician
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Finance} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Finance, Banking, Investments and Insurance</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in financial and investment planning and management, and providing banking and insurance services.</CardSubtitle>
                                <CardText>
                                    Accounting Clerk&bull;
                                    Appraiser&bull;
                                    Credit Analyst&bull;
                                    Credit Checker&bull;
                                    Economist&bull;
                                    Financial Counsellor&bull;
                                    Insurance Adjuster and Examiner&bull;
                                    Insurance Agent&bull;
                                    Loan Officer&bull;
                                    Tax Preparer
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={HealthSciences} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Health Sciences, Care and Prevention</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in helping others by providing diagnostic, therapeutic, informational and environmental services, including researching and developing new health care services.</CardSubtitle>
                                <CardText>
                                    Anaesthesiologist&bull;
                                    Athletic Trainer&bull;
                                    Chiropractor&bull;
                                    Dentist&bull;
                                    Emergency Medical Technician&bull;
                                    Physical Therapist&bull;
                                    Occupational Therapist&bull;
                                    Pharmacist&bull;
                                    Physician&bull;
                                    Registered Nurse
                                </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card>
                                <CardImg top width="100%" src={IT} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Information Technology (IT)</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in the design, development, support and management of hardware, software, multimedia, systems integration services and technical support.</CardSubtitle>
                                <CardText>
                                    Computer/Information Systems Manager&bull;
                                    Computer Engineer&bull;
                                    Computer Programmer&bull;
                                    Computer Security Specialist&bull;
                                    Computer Support Specialist&bull;
                                    Computer Systems Analyst&bull;
                                    Data Communications Analyse&bull;
                                    IT Mechanic
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src={Animals} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Agriculture, Animals and Natural Resources</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in activities involving the training, raising, feeding and caring for animals.</CardSubtitle>
                                <CardText>
                                    Agricultural Engineer&bull;
                                    Agricultural Scientist&bull;
                                    Animal Trainer&bull;
                                    Chef&bull;
                                    Conservation Scientist&bull;
                                    Farm Equipment Mechanic&bull;
                                    Fish and Game Warden&bull;
                                    Forester&bull;
                                    Veterinarian&bull;
                                    Zoologist
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Industrial} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Manufacturing (Mechanical/Industrial)</h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in applying mechanical principles to practical situations using machines, hand tools or techniques. / Interest in repetitive, organized activities in a factory or industrial setting.</CardSubtitle>
                                <CardText>
                                    Chemical Engineer&bull;
                                    Forklift Operator&bull;
                                    Gas and Oil Plant Operator&bull;
                                    Jeweller&bull;
                                    Locksmith&bull;
                                    Metal/Plastic Processing Worker&bull;
                                    Office Machine Repairer&bull;
                                    Power Plant Operator&bull;
                                    Shoe and Leather Worker
                                    Welder
                                </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                    </CardDeck>
                    <br/>
          </Container>
               
        );
    }
};

export default Practitioners;