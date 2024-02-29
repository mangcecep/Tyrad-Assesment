import ProgressBar from "../subcomponents/ProgressBar"

const Card = () => {

    return (
        <div className="card bg-light rounded">
            <div className="card-body">
                <h4>Expenses and Income </h4>
                <div className="d-flex justify-content-between">
                    <div className="column">
                        <p className="h6">Expense</p>
                        <p className="h4">70%</p>
                        <p className="text-muted">5.563</p>
                    </div>
                    <div className="column text-center">
                        <p className="h6">|</p>
                        <p className="h4">VS</p>
                        <p className="h6">|</p>
                    </div>
                    <div className="column">
                        <p className="h6">Income</p>
                        <p className="h4">30%</p>
                        <p className="text-muted">2.256</p>
                    </div>
                </div>
                <ProgressBar
                    bgcolor="purple"
                    bgcolorSecond="orange"
                    progress="70"
                    progresssecond="30"
                    height={30}
                />
            </div>
        </div>
    )
}

export default Card