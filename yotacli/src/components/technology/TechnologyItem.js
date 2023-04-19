import React, { useEffect, useState } from 'react';
import classes from '../technology/TechnologyItem.module.css';
import axios from 'axios';


const TechnologyItem = (props) => {

    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9090/yota/api/technologies/")
            .then((response) => {
                console.log(response.data)
                setTechnology(response.data);

            });
    }, [])

    return (
        <div className={`table-responsive ${classes.table}` }>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name Of Technology</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {technology.map((tech, key) => (
                        <tr key={key}>
                            <td><b>{tech.id}</b></td>
                            <td>{tech.name}</td>
                            <td>{tech.shortDescription}</td>
                            <td><i className="fa fa-edit" ></i>&nbsp;                                                      {/* onClick={(event) => handleEditClick(event, list)} */}
                                <i className='fa fa-trash-can'></i>                                                         {/* onClick={() => handleDeleteClick(tech.id)} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TechnologyItem;