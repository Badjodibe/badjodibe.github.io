import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MessageDetail = ( ) => {
    const location = useLocation();
    const {data} = location.state || {};
    return (
      <div>
        <h2>Message Details</h2>
        <p><strong>Subject:</strong> {data.subject}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Message:</strong> {data.message}</p>
      </div>
    );
  };
  MessageDetail.propTypes = {
    data : PropTypes.shape({
      subject: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      category: PropTypes.string,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default MessageDetail;