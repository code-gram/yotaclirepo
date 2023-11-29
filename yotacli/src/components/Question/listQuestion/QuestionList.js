import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { headerContents } from '../../utils/Authentication';

const QuestionList = (props) => {
    const [list, setList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        axios.get("http://localhost:9090/yota/api/questions/all", {
            headers: headerContents()
        }
        ).then(response => {
            setList(response.data);
            console.log(response.data);
            console.log(list[0])
        })
            .catch(error => {
                console.log(error);
            })
    }, [location.key]);

    return (
        <tbody>
            {props.searchInput == '' &&
                list.map((list, index) => (
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td><code>{list.question}</code></td>
                        <td>{list.questionLevel}</td>
                        <td>{list.option_A}</td>
                        <td>{list.option_B}</td>
                        <td>{list.option_C}</td>
                        <td>{list.option_D}</td>
                        <td>{list.correctAnswer}</td>
                        <td>{list.created_At}</td>
                        <td>{list.updated_At}</td>
                        <td>
                            <Link to={`/trainer/updatequestion/${list.id}`}>
                                {" "}
                                <i className="fa fa-edit"></i>&nbsp;{" "}

                            </Link>

                            <Link
                                to={`/trainer/deletequestion/${list.id}`}
                                onClick={() =>
                                    axios.delete(`http://localhost:9090/yota/api/questions/${list.id}`,
                                        {
                                            headers: headerContents()
                                        }
                                    )
                                        .then(response => {
                                            console.log("deleted successfully");
                                            alert("Item Deleted Succesfully");
                                            window.location.reload();
                                        })
                                        .catch(error => {
                                            console.error("Error deleting this object", error);
                                        })
                                }
                            >
                                <i className="fa fa-trash-can"></i>
                            </Link>
                        </td>
                    </tr>
                ))
            }
            {props.searchInput &&
                list.filter(data => data.question.includes(props.searchInput)).map((list, index) => (
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.question}</td>
                        <td>{list.questionLevel}</td>
                        <td>{list.option_A}</td>
                        <td>{list.option_B}</td>
                        <td>{list.option_C}</td>
                        <td>{list.option_D}</td>
                        <td>{list.correctAnswer}</td>
                        <td>{list.created_At}</td>
                        <td>{list.updated_At}</td>
                        <td>
                            <Link to={`/trainer/updatequestion/${list.id}`}>
                                {" "}
                                <i className="fa fa-edit"></i>&nbsp;{" "}

                            </Link>

                            <Link
                                to={`/trainer/deletequestion/${list.id}`}
                                onClick={() =>
                                    axios.delete(`http://localhost:9090/yota/api/questions/${list.id}`, {
                                        headers: headerContents()
                                    })
                                        .then(response => {
                                            console.log("deleted successfully");
                                            alert("Item Deleted Succesfully");
                                            window.location.reload();
                                        })
                                        .catch(error => {
                                            console.error("Error deleting this object", error);
                                        })
                                }
                            >
                                <i className="fa fa-trash-can"></i>
                            </Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default QuestionList
