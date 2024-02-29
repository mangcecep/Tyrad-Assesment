
const Popover = ({ isOpen, content, children }) => {
    return (
        <div className="no-library">
            {children}
            {isOpen && content}
            {/* {isOpen && createPortal(content, document.body)} */}
        </div>
    )
}

export default Popover
