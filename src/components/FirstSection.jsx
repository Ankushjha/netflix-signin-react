import Header from './Header.jsx';
import SearchBody from './SearchBody.jsx';
import styles from "./FirstSection.module.css";

export default function FirstSection(){

    return(
        <>
         <div className= {`realtive overflow-hidden w-full bg-cover h-screen `+ styles.bgGrad} title="Netflix Background">
            <Header className='flex justify-between h-auto items-center w-screen px-40 mt-4'/>
            <div className='absolute flex justify-center w-full mt-52'>
            <SearchBody className="text-center text-xl"/>
            </div>
         </div>
        </>
    )
}