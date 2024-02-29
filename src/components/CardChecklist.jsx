import Popup from "reactjs-popup";

const CardChecklist = ({
    title,
    action,
    checkListAction
}) => {
    return (
        <div className="card bg-secondary p-2">
            <div className="input-group">
                <div className="custom-control custom-checkbox m-2">
                    <input className="form-check-input" type="checkbox" id="title" value={title} onChange={(e) => checkListAction(e.target.value)} />
                    <label className="form-check-label" htmlFor="title">{title}</label>
                </div>
                <div className="input-group-prepend">
                    <Popup
                        trigger={
                            <div>
                                <button className="btn btn-secondary"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                            </div>
                        }
                        position={["top left", "top right", "bottom left", "bottom right"]}
                        closeOnDocumentClick
                    >
                        <div className="popover-content">
                            <button className='btn btn-danger' type='submit' onClick={() => action(title)}>Remove</button>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default CardChecklist