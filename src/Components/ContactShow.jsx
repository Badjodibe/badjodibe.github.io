import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER } from "../Config/Config";
import { useNavigate } from 'react-router-dom';


const DisplayMessage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  const showMore = (item) => {
    const path = '/contact/' + item.id;
    navigate(path, { state: { item } });
  };

    useEffect(() => {
        const APIGET = SERVER + "api/contacts";
        axios.get(APIGET)
        .then( response => {
            setData(response.data);
            setLoading(false);
            }
        )
        .catch(error => {
            setError(error);
            setLoading(false);
            alert("Error receiving data");
            console.error("Error submitting form:", error);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      return(
        <div id="id_">
            <div className="showData">
                <ul>
                    {data.map(item =>
                            <button key={item.id} onClick={() => showMore(item)}>
                                <strong>{item.date}</strong>
                                <strong>{item.subject}</strong>
                                <span>{item.category}</span>
                                <span>{item.email}</span>
                            </button>
                    )}
                </ul>
            </div>
        </div>
      )
}

export default DisplayMessage;