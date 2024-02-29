
const ChatCard = ({ chats }) => {
    return (
        <div className="steamline m-t-40">
            <div className="row">
                {
                    chats?.length > 0 ? chats?.map((chat, idx) => {
                        return (chat.senderId === chat.typeId ?
                            <div className="col-lg-12 col-12" key={idx}>
                                <div className="d-flex float-right">
                                    <p className="bg-success text-light p-2 rounded">{chat.message} <i className="fa fa-user fa-2x ml-2 text-light"></i></p>

                                </div>
                            </div> :
                            <div className="col-lg-12 col-12" key={idx}>
                                <div className="d-flex" >
                                    <p className="bg-info text-light p-2 rounded"><i className="fa fa-user fa-2x text-light mr-2"></i>{chat.message}</p>
                                </div>
                            </div>
                        )
                    }) : ''
                }
            </div>

        </div >
    )
}

export default ChatCard