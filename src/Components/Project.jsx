import axios from "axios";
import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ListProject = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleClick = (item) =>{
        history.push("", {data : item})
    }
    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios({
                    method:'get',
                    url: "url"
                });
                setData(response.data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }

        };
        fetchData()
    }, []
);
if(loading) return 
if(error) return 

return(
    <div>

        {
            data.map(item =>(
              <button key={item.key} onClick={() => handleClick(item)}>
                <div>
                    <img src="" alt="" />
                </div>
                <div>

                </div>
                <div>
                    <button></button>
                </div>
              </button>  
              
            )
                
            )
        }
        
    </div>
)
};

const DispalyProject = () =>{
    const location = useLocation();
    const { data } = location.state || {};

    if (!data) {
        return <div>No data to display</div>;
      }
    
    return(
        <div>

        </div>
    )
}