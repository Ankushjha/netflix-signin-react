import translateIcon from '../assets/images/google-translate-icon.png'


export default function LanguageButton() {
    const selectButton = {
        background: 'rgba(0, 0, 0, 0.3)',
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)',
}

return(
    <div className="language-selector relative">
    <select name="language" id="language-selector" className='border border-slate-400 rounded pl-8 py-1' style={selectButton}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
    </select>
    <img src={translateIcon} alt="Language Selector" href="#language-selector" className='w-5 h-5 absolute top-1 left-1'/>
</div>
)
}