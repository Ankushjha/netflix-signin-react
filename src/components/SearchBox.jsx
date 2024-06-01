export default function SearchBox() {
    
    const searchBox = {
        background: 'rgba(0, 0, 0, 0.3)',
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)',
    }

    const buttonText = "Get Started >"
    return(
        <>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="search mt-4">
                <input type="email" name="" id="" placeholder="Email address" className="text-base border border-slate-400 rounded pl-2 py-4 w-96" style={searchBox} />
                <button className="text-2xl bg-red-600 ml-6 py-3.5 font-semibold px-4 rounded-lg">{buttonText}</button>
            </div>
            </>
    )
}