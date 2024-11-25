import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Problem(
    {title, difficulty, domain, url}
){
    const openLink = () => {
        window.open(url, "_self")
    }
    return(
        <>
            <div onClick={openLink} className="ProblemContainer">
                <div className="ProblemTitle">{title}</div>
                <div className="ProblemDifficulty">{difficulty}</div>
                <div className="ProblemDomain">{domain}</div>
                <ArrowForwardIcon className='bg-green-700'/>
            </div>
        </>
    )
}