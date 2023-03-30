import { AiFillGithub, AiFillApi } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';

function Footer(){
    return(
        <footer>
            <h3>Contact</h3>
            <div className="footerContaner">
               <a href="">
                    <AiFillGithub size={40}  className='icon gitHub'/>
                    <p>Github</p>
               </a>
               <a href="">
                    <AiFillApi size={40} className='icon api'/>
                    <p>API</p>
               </a>
               <a href="">
                    <TbBrandFiverr size={40} className='icon fiverr'/>
                    <p>Fiverr</p>
               </a>
            </div>
        </footer>
    )
}

export default Footer;