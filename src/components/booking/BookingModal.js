const BookingModal = ({ isOpen, onClose, bookingDetails }) => {
    return (
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">
          <div className="box">
            <h3>Booking Details</h3>
            <p>Origin: {bookingDetails.origin}</p>
            <p>Destination: {bookingDetails.destination}</p>
            {/* Add more booking details */}
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
      </div>
    );
  };
  
  export default BookingModal;