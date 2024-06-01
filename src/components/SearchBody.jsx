import SearchBox from "./SearchBox";

export default function SearchBody({ ...props }) {

    return (
        <div {...props}>
            <h2 className="text-5xl font-extrabold dark:text-white mb-4">Unlimited movies, TV shows and more</h2>
            <h5 className="text-3xl font-semibold dark:text-white mb-6">Watch anywhere. Cancel anytime.</h5>

            <SearchBox />
        </div>
    );
}