import { headerLogo } from '../assets/images'; 
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-10 w-full">
        
         <nav className="flex items-center justify-between px-4 py-2 w-full overflow-visible">
            <a href="/">
            <img
            src={headerLogo}
            alt="Logo"
            className='h-12 w-auto object-contain'
            />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                )) }
            </ul>
            <div className='hidden:max-lg:block'>
                <img 
                src={hamburger} 
                alt="hamburger"
                width={25}
                height={25}
                 />
            </div>
         </nav>
    </header>
)
}

export default Nav