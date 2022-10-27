// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import Xion_Exchange from '../assets/Xion_Exchange.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>XION EXCHANGE</h3>
                    <img src={Xion_Exchange} alt="Uniswap Swap Page" />
                    <p>This is my custom crypto exchange I created using React.js and it is sitting on smart contracts I wrote
                    using Solidity.  
                    </p>

                    <a href="https://wild-art-2666.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/perrycdaniels/xion-exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PROJECT #2</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>COMING SOON: I am planning on building a Netflix like website on the decentralized 
                    blockchain.  This could be a great way to build my blockchain development skills.                                                                                                                   
                    </p>
                    Streaming services in the future will want a decentralized version of their
                    products.
                </div>

                <div className="projects__card">
                    <h3>PROJECT #3</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>COMING SOON: I am planning on building an NFT store like OpenSea.  
                    This would add another sector of blockchain development to my
                    utility belt. 
                    </p>
                    More and more companies are also going to need a decentralized version of their online stores.
                </div>
            </div>
        </section>
    );
}

export default Projects;