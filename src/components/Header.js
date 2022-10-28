// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Daniel</h1>
                <p>Blockchain Developer</p>
                <a href="https://www.linkedin.com/in/daniel-pickett-a6897635/" className="button">Get in Touch</a>
            </div>
        </section>
    );
}

export default Header;
