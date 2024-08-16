import { Api } from "@mui/icons-material";
import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object(
    {
        query: Yup.string().required("Required")
    }
)

const search = () => {
    const formik = useFormik({
        initialValues : {
            query: ''
        },
        validationSchema: validationSchema,
        onSubmit : values => {

        }
    })
}
const Articles = () => {
    
    const [articles, setArticle] = useState([]);
    useEffect(() => {
        const API = "";
        axios.get(API)
        .then((response) =>{
            setArticle(response.data)
        })
        .catch((error) => {
            return (
                <div>
                    <div><img src="" alt="" /></div>
                    <div>Désolé une erreur s'est produite</div>
                </div>
            )
        });
    }, []);
    
    return(
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Enter le motif de votre recherche" name="query" id="query" />
                    </div>
                    <div>
                        <div>
                            <ul>
                                {data.map(item => {
                                    <button key={item.id}>
                                        <div>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>
                                            {item.date}
                                        </div>
                                        <div>
                                            <a href={item.lin}>{item.title}</a>
                                        </div>
                                    </button>
                                })}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Articles;