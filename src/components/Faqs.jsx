import FaqsAccordion from "./FaqsAccordion";
import SearchBox from "./SearchBox";

export default function Faqs() {
    return (
        <>
            <div className="w-full py-12">
                <h3 className="text-center text-5xl font-bold pb-12">Frequently Asked Questions</h3>
                <FaqsAccordion />

                <div className="w-full text-center text-xl pb-10">
                    <SearchBox />
                </div>
            </div>
        </>
    )
}