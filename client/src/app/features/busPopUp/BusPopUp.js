import SelectedBus from "../selected-bus/SelectedBus";

const BusPopup = ({ onClose }) => {
    return (
        <div className="bus-popup">
            <div className="popup-content">
                <SelectedBus />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BusPopup;
