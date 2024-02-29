

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ bgcolor, progress, height, progresssecond, bgcolorSecond }) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 5,
        display: 'flex',
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 5,
        textAlign: 'right',
        color: '#fff',
    }
    const ChilddivScond = {
        height: '100%',
        width: `${progresssecond}%`,
        backgroundColor: bgcolorSecond,
        borderRadius: 5,
        textAlign: 'left'
    }

    const progresstext = {
        padding: 5,
        color: 'white',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
            <div style={ChilddivScond}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}


export default ProgressBar