export default function FooterMenu(){
    const width = {
        width: "calc(25% - 12px)",
    }
    return(
        <div className="container underline mb mb-6">
            <ul className="flex flex-wrap">
                <li className="text-sm mt-4 " style={width}><a href="#">FAQ</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Help Centre</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Account</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Media Centre</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Investor Relations</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Jobs</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Ways to Watch</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Terms of Use</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Privacy</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Cookie Preferences</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Corporate Information</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Contact Us</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Speed Test</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Legal Notices</a></li>
                <li className="text-sm mt-4 " style={width}><a href="#">Only on Netflix</a></li>
            </ul>
        </div>
    )
}