import cartIcon from '../assets/cart-icon.png'
import hospitalIcon from '../assets/hospital-icon.jpg'
import ticketIcon from '../assets/ticket.webp'

const CardBadge = ({
    title
}) => {
    return (
        <div className="card bg-light rounded">

            <div className="card-body">
                <div className="d-flex justify-content-start border-bottom">
                    <div className="align-item-center">
                        <img src={cartIcon} className='icon' width={40} height={35} />
                    </div>
                    <div className="column ml-2">
                        <p className="h6 rounded">Online Store</p>
                        <p className="h6 text-muted">May 30, 2023 at 08:00 pm</p>
                    </div>
                </div>
                <div className="d-flex justify-content-start border-bottom py-2">
                    <div className="align-item-center">
                        <img src={hospitalIcon} className='icon' width={40} height={40} />
                    </div>
                    <div className="column ml-2">
                        <p className="h6 rounded">Pay the hospital</p>
                        <p className="h6 text-muted">May 28, 2023 at 10:00 pm</p>
                    </div>
                </div>
                <div className="d-flex justify-content-start border-bottom py-2">
                    <div className="align-item-center">
                        <img src={ticketIcon} className='icon' width={30} height={30} />
                    </div>
                    <div className="column ml-2">
                        <p className="h6 rounded">Tickets</p>
                        <p className="h6 text-muted">May 10, 2023 at 12:00 pm</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="text-center">
                    <a href='#'>view all</a>
                </div>
            </div>
        </div>
    )
}

export default CardBadge