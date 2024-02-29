import Card from "./Card"
import CardBadge from "./CardBadge"
import CardPremium from "./CardPremium"

const Rightbar = () => {
    return (
        <aside className="right-sidebar">
            <div className="scroll-sidebar m-t-30 p-4">
                <Card />
                <CardBadge title={`Latest Spending`} />
                <CardPremium />
            </div>
        </aside>
    )
}

export default Rightbar