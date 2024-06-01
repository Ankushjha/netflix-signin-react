import headerLogo from '../assets/images/header-logo.png';
import LanguageButton from './LanguageButton';

export default function Header({...props}) {


    return (
        <header {...props}>
            <img src={headerLogo} alt="Netflix logo" className='h-14' />
            <div className="right-navbar flex justify-end items-center">
            <LanguageButton />
            <button className='bg-red-600 ml-6 py-1 font-semibold px-4 rounded-lg'>Sign In</button>
            </div>
        </header>
    )
}