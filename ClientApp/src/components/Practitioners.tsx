import * as React from 'react';
import { CardImg, Row, Container} from 'reactstrap';
import {
    Card, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import Logo from "../Pictures/FLYING SCROL LOGO.jpg";
import ArtsPicture from '../Pictures/Arts.jpg';

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
                    <p>
                    <CardDeck>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={ArtsPicture} alt="cardn images cap"></CardImg>
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
                                    Graphic Designer &bull;
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in creative or performing arts, communication or A/V technology</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                            <Card >
                                <CardImg top width="100%" src={Logo} alt="cardn images cap"></CardImg>
                                <CardBody>
                                <CardTitle><h5>Career Development </h5></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">bjfbvhjdb dfvkbdfv</CardSubtitle>
                                <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
                                </CardBody>
                            </Card>
                        </Row>
                    </CardDeck>
                        
                        
                        
                    </p>
                    <p>
                        <strong>Science, Technology, Engineering and Mathematics:</strong>  Interest in problem-solving, discovering, collecting and analysing information and
                        applying findings to problems in science, math and engineering.<br/>

                        Aerospace Engineerbr<br/>
                        Biologistbr<br/>
                        Chemist<br/>
                        Electrical and Electronics Engineer Geographer<br/>
                        Petroleum Engineer Mechanical Engineer<br/>
                        Meteorologist<br/>
                        Physicist<br/>
                        Safety Engineer<br/>
                    </p>
                    <p>
                        <strong>Plants, Agriculture and Natural Resources: </strong> Interest in activities involving plants, usually in an outdoor setting.<br/>

                        Agricultural Engineer<br/>
                        Agricultural Scientist<br/>
                        Animal Trainer<br/>
                        Chef<br/>
                        Conservation Scientist<br/>
                        Farm Equipment Mechanic<br/>
                        Fish and Game Warden<br/>
                        Forester<br/>
                        Veterinarian<br/>
                        Zoologist<br/>
                    </p>
                    <p>
                        <strong>Law, Public Safety, Corrections and Security:</strong> Interest in judicial, legal and protective services for people and property.<br/>

                        Coroner<br/>
                        Corrections Officer<br/>
                        Court Clerk<br/>
                        Detective and Investigator<br/>
                        Fire fighter<br/>
                        Judge<br/>
                        Lawyer<br/>
                        Life Guard and Ski Patrolman<br/>
                        Police Patrol Officer<br/>
                    </p>
                    <p>
                        <strong>Manufacturing (Mechanical/Industrial): </strong> Interest in applying mechanical principles to practical situations using machines, hand tools or
                        techniques. / Interest in repetitive, organized activities in a factory or industrial setting.
                        <br/>

                        Chemical Engineer<br/>
                        Forklift Operator<br/>
                        Gas and Oil Plant Operator<br/>
                        Jeweller<br/>
                        Locksmith<br/>
                        Metal/Plastic Processing Worker<br/>
                        Office Machine Repairer<br/>
                        Power Plant Operator<br/>
                        Shoe and Leather Worker<br/>
                        Welder
                    </p>
                    <p>
                        <strong>Business, Management and Administration:  </strong>  Interest in organizing, directing and evaluating business functions.<br/>

                        Accountant<br/>
                        Advertising Manager<br/>
                        Computer Operator<br/>
                        Court Reporter<br/>
                        Management Analyst<br/>
                        Meeting and Convention Planner<br/>
                        Payroll Clerk<br/>
                        Property and Real Estate Manager<br/>
                        Shipping and Receiving Clerk<br/>
                        Statistician<br/>

                    </p>
                    <p>
                        <strong>Marketing, Sales and Service: </strong> Interest in bringing others to a point of view through personal persuasion, using sales or promotional techniques.<br/>

                        Advertising Salesperson<br/>
                        Buyer and Purchasing Agent<br/>
                        Customer Service Representative<br/>
                        Floral Designer<br/>
                        Market Research Analyst<br/>
                        Public Relations Specialist<br/>
                        Real Estate Agent<br/>
                        Sales Manager<br/>
                        Telemarketer<br/>

                    </p>
                    <p>
                        <strong>Hospitality and Tourism: </strong>Interest in providing services to others in travel planning and hospitality services in hotels, restaurants and recreation.<br/>

                        Baggage Porter and Bellhop<br/>
                        Chef and Dinner Cook<br/>
                        Food Service Worker<br/>
                        Hotel Manager<br/>
                        Janitor/Housekeeper Supervisor<br/>
                        Reservation and Ticket Agent<br/>
                        Restaurant Manager<br/>
                        Tour Guide<br/>
                        Travel Agent<br/>
                    </p>
                    <p>
                        <strong>Human Services:</strong>Interest in helping others with their mental, spiritual, social, physical or career needs.<br/>

                        Child Care Worker<br/>
                        Clergy<br/>
                        Cosmetologist<br/>
                        Counsellor<br/>
                        Funeral Director<br/>
                        Manicurist<br/>
                        Professional Makeup Artist<br/>
                        Financial Adviser<br/>
                        Psychologist<br/>
                        Residential Counsellor<br/>
                        Social Worker<br/>
                    </p>
                    <p>
                        <strong>Government and Public Administration:</strong>Interest in performing government functions at the local, state or federal level.<br/>

                        City Planning Aide Construction/Building<br/>
                        Inspector Interpreter and Translator<br/>
                        License Clerk<br/>
                        Occupational Health Specialist<br/>
                        Tax Examiner<br/>
                    </p>
                    <p>
                        <strong>Architecture, Design and Construction: </strong>Interest in designing, planning, managing, building and maintaining physical structures.<br/>

                        Architect<br/>
                        Cabinetmaker<br/>
                        Carpenter<br/>
                        Construction Manager<br/>
                        Electrician<br/>
                        Civil Engineer<br/>
                        General Construction Worker<br/>
                        Highway Maintenance Worker<br/>
                        Interior Designer<br/>
                        Sheet Metal Worker Surveying and Mapping<br/>
                        Technician<br/>
                    </p>
                    <p>
                        <strong>Education and Training:</strong> Interest in planning, managing and providing educational services, including support services, library and information services.<br/>

                        Audio/Visual Specialist<br/>
                        Coach and Sports Instructor<br/>
                        College/University Administrator<br/>
                        Teacher/Professor<br/>
                        Librarian<br/>
                        Public Health Educator<br/>
                        Special Education Teacher<br/>
                        Speech Pathologist<br/>
                    </p>
                    <p>
                        <strong>Finance, Banking, Investments and Insurance:</strong>Interest in financial and investment planning and management, and providing banking and insurance services.<br/>

                        Accounting Clerk<br/>
                        Appraiser<br/>
                        Credit Analyst<br/>
                        Credit Checker<br/>
                        Economist<br/>
                        Financial Counsellor<br/>
                        Insurance Adjuster and Examiner<br/>
                        Insurance Agent<br/>
                        Loan Officer<br/>
                        Tax Preparer<br/>
                    </p>
                    <p>
                        <strong>Health Sciences, Care and Prevention:</strong>Interest in helping others by providing diagnostic, therapeutic, informational and environmental services, including researching and developing new health care services.<br/>

                        Anaesthesiologist<br/>
                        Athletic Trainer<br/>
                        Chiropractor<br/>
                        Dentist<br/>
                        Emergency Medical Technician<br/>
                        Physical Therapist<br/>
                        Occupational Therapist<br/>
                        Pharmacist<br/>
                        Physician<br/>
                        Registered Nurse<br/>
                    </p>
                    <p>
                        <strong>Information Technology (IT): </strong> Interest in the design, development, support and management of hardware, software, multimedia, systems integration services and technical support.<br/>

                        Computer/Information Systems Manager<br/>
                        Computer Engineer<br/>
                        Computer Programmer<br/>
                        Computer Security Specialist<br/>
                        Computer Support Specialist<br/>
                        Computer Systems Analyst<br/>
                        Data Communications Analyse<br/>
                        IT Mechanic
                    </p>
                    <p>
                        <strong>Agriculture, Animals and Natural Resources:</strong>Interest in activities involving the training, raising, feeding and caring for animals.<br/>

                        Agricultural Engineer<br/>
                        Agricultural Scientist<br/>
                        Animal Trainer<br/>
                        Chef<br/>
                        Conservation Scientist<br/>
                        Farm Equipment Mechanic<br/>
                        Fish and Game Warden<br/>
                        Forester<br/>
                        Veterinarian<br/>
                        Zoologist<br/>
                    </p>
                    <p>
                        <strong>Transportation, Distribution and Logistics:</strong>Interest in the movement of people, and goods by road, pipeline, air, railroad or water.<br/>

                        Air Traffic Controller<br/>
                        Airplane Pilot<br/>
                        Automobile Mechanic<br/>
                        Flight Attendant<br/>
                        Motorboat Mechanic<br/>
                        School Bus Driver<br/>
                        Subway and Streetcar Operator<br/>
                        Traffic Technician<br/>
                        Transportation Agent<br/>
                    </p>
          </Container>
               
        );
    }
};

export default Practitioners;