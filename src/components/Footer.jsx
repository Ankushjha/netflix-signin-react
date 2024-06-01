import FooterMenu from "./FooterMenu";
import LanguageButton from "./LanguageButton";

export default function Footer(){
    return (
        <div className="w-full flex flex-col items-center py-12 text-gray-400 pl-3">
            <div className="w-4/5">
                <p className="pb-2 font-medium">Questions? Call <a href="tel:000-800-919-1694" className="underline">000-800-919-1694</a></p>
                <FooterMenu />
                <LanguageButton />
                <p className="py-5"> Netflix India</p>
            </div>
        </div>
    )
}