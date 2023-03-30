import { AiFillGithub, AiFillApi } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';

function Footer(){
    return(
        <footer>
            <h3>Contact</h3>
            <div className="footerContaner">
               <a href=""  id='github'>
                    <AiFillGithub size={40}  className='icon'/>
                    <p>Github</p>
               </a>
               <a href="" id='api'>
                    <AiFillApi size={40} className='icon'/>
                    <p>API</p>
               </a>
               <a href="" id='fiverr'>
                    <TbBrandFiverr size={40} className='icon'/>
                    <p>Fiverr</p>
               </a>
            </div>
        </footer>
    )
}

export default Footer;