import './styles.css';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

const Projects = () => {
    return  (
        <div id="projects" className="projects-container">
            <h1 className='project-heading'> 
                Projects
            </h1>
            <div sm className="project-cards">
                <CardDeck xl className='project-cards'>
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="/assets/expkittensmall.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    Exploding Kittens
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    Two player card game built to solidify experience using javascript, HTML and CSS.  
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://mdcoxe.github.io/explodingkittens/'>
                                    Deployed
                                </Card.Link>
                                <Card.Link className='link' href='https://github.com/mdcoxe/explodingkittens'>
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card>
                       
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="/assets/honeybadgersmall.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    Honey Badger Fat-Tire Bike Shop
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    Basic e-commerce store, using NodeJS, Express, MongoDB, and RESTful routing.
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://github.com/mdcoxe/honey-badger-fat-tire-bikes'>
                                    Deployed
                                </Card.Link>
                                <Card.Link className='link' href='https://honey-badger-bikes.herokuapp.com/fattire/'>
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card> 
                 
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="/assets/astrowxsmall.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    Astro-Wx
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    Full-Stack MERN app, integrating multiple API’s to increase chances of viewing Aurora Borealis and other astronomical events. 
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://github.com/mdcoxe/Astro-Wx'>
                                    Deployed
                                </Card.Link>
                                <Card.Link className='link' href='https://astro-wx.herokuapp.com/'>
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card> 
                    <br/>
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="/assets/expkittensmall.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    Tweetr/Trittilo
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    Full-stack, React, Ruby, Ruby-on-Rails, PostgreSQL twitter clone. Built in authentication and authorization as well as initial design utilizing Bootstrap 
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://tweetr-frontend.herokuapp.com/Feed'>
                                    Frontend
                                </Card.Link>
                                <Card.Link className='link' href='https://tweetr-backend.herokuapp.com/replies'>
                                    Backend
                                </Card.Link>
                                <Card.Link className='link' href='https://github.com/mdcoxe/tweeter-frontend'>
                                    GitHub 
                                </Card.Link>
                            </Card.Body>
                        </Card>
                      
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="/assets/honeybadgersmall.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    Honey Badger Fat-Tire Bike Shop
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    Basic e-commerce store, using NodeJS, Express, MongoDB, and RESTful routing.
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://github.com/mdcoxe/honey-badger-fat-tire-bikes'>
                                    Deployed
                                </Card.Link>
                                <Card.Link className='link' href='https://honey-badger-bikes.herokuapp.com/fattire/'>
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card> 
                   
               
                    {/* <Card style={{ width: '50%', marginLeft: '16px' }}>
                        <Card.Img variant="top" src="/assets/honeybadgersmall.png" />
                        <Card.Body>
                            <Card.Title>Honey Badger Fat-Tire Bike Shop</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                    <Card className='p-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/assets/trittilosmall.png" />
                        <Card.Body>
                            <Card.Title>Trittilo/Tweetr</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                    <Card className='p-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/assets/astrowxsmall.png" />
                        <Card.Body>
                            <Card.Title>Astro Wx</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>   */}
                </CardDeck>
            </div>              
        </div>
    )
}

export default Projects;

// 
// https://astro-wx.herokuapp.com/ 
// https://tweetr-frontend.herokuapp.com/Feed
// https://tweetr-backend.herokuapp.com/replies
