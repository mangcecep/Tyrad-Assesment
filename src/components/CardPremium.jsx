import iconPremium from '../assets/premium-icon.png'

const CardBadge = () => {
    return (
        <div className="card bg-light rounded">

            <div className="card-body">
                <div className="card-titile">
                    <h4 className='text-center py-3'>Go to Premium</h4>
                </div>
                <img src={iconPremium} className='img-thuimbnail' width={200} />
                <div className="d-flex justify-content-start border-bottom py-2">

                    <div className="column ml-2">
                        <h3 className="h6 rounded">Need more fetures?</h3>
                        <p className="text-muted">Update your account to premium <br />to get more features.</p>
                        <button className="btn btn-purple">Get Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardBadge