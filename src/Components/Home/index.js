import './styles.css';
import Typed from 'react-typed';
const words = ['Software Engineer','Full-stack Developer', 'Veteran','Freelancer', 'Volunteer']
const Home = () => {
   
    return  (
        <div className="home-container">
                <div className='typed'> 
                    <h1>I'm a <Typed
                    strings={words}
                    typeSpeed={100}
                    backSpeed={50}
                    loop='true'
                    /></h1> 
                </div>
                <p className='home-p'>Software Engineer, Full-Stack Developer, Veteran, Freelancer, Volunteer </p>
                <p className='home-brand'>
                I am a detailed-oriented, full-stack developer with proven ability to adapt and learn quickly. My military and private sector experience provided me with the skills to communicate effectively in diverse environments and solve problems efficiently.
                </p>
            </div>
    )
}

export default Home;