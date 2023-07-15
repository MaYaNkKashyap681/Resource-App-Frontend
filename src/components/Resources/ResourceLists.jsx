import axios from 'axios'
import React from 'react'
import { apiUrl } from '../../config/apiEp'
import { useState, useEffect } from 'react'

const ResourceLists = () => {
    const [resourceList, setResourceList] = useState([])

    const fetchResourceList = async () => {
        try {
            const response = await axios.get(`${apiUrl}/material/all`);
            if (response.status === 200) {
                setResourceList(response.data.data)
            }
        }
        catch (err) {

        }
    }

    useEffect(() => {
        fetchResourceList();
    }, [])
    return (
        <div>{
            resourceList.length > 0 && resourceList.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))
        }</div>
    )
}

export default ResourceLists