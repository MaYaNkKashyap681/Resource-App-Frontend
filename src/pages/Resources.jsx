import React from 'react'
import axios from 'axios'
import { apiUrl } from '../config/apiEp'
import SearchBar from '../components/reusable/SearchBar'
import ResourceLists from '../components/Resources/ResourceLists'
import { useState, useEffect } from 'react'
import ResourcesTabs from '../components/Resources/ResourcesTabs'

const Resources = () => {
  const [resourceList, setResourceList] = useState([
    {
      _id: "64b2d3c859a1da05bcd024d3",
      title: "Google Sheet",
      resource: "https://firebasestorage.googleapis.com/v0/b/resourcesharingapp-8574f.appspot.com/o/path%2Fto%2Fupload%2Fgoogle_6_months.pdf?alt=media&token=253c3023-3337-4aed-a083-090fac3047ff",
      username: "Mayank Kashyap",
      description: "Google Cracker Sheet for Problems",
      resourceType: "PDF",
      category: "DSA",
      grade: "Undergrad",
      createdAt: "2023-07-15T17:13:44.428Z",
      updatedAt: "2023-07-15T17:13:44.428Z",
      __v: 0
    },
  ])

  const fetchResourceList = async () => {
    try {
      // console.log(`${apiUrl}/material/all`)
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

  const [searchedResults, setSearchedResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeOut, setSearchTimeOut] = useState(null);

  const updateList = (tabCategory) => {
    // console.log(tabCategory)
    const searchResults = resourceList.filter((item) => {
      if (
        item.username.toLowerCase().includes(tabCategory.toLowerCase()) ||
        item.category.toLowerCase().includes(tabCategory.toLowerCase()) ||
        item.title.toLowerCase().includes(tabCategory.toLowerCase())
      ) {
        return item;
      }
      // console.log(tabCategory)
    });
    setSearchedResults(searchResults);
  }


  const handleSearchChange = (e) => {
    e.preventDefault();
    clearTimeout(searchTimeOut);
    setSearchText(e.target.value);
    setSearchTimeOut(
      setTimeout(() => {
        const searchResults = resourceList.filter((item) => {
          if (
            item.username.toLowerCase().includes(searchText.toLowerCase()) ||
            item.category.toLowerCase().includes(searchText.toLowerCase()) ||
            item.title.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return item;
          }
        });
        // console.log(searchResults)
        setSearchedResults(searchResults);
      }, 500)
    );
  };


  return (
    <div className='min-h-screen w-screen'>
      <ResourcesTabs value={searchText} setSearchText={setSearchText} updateList={updateList} />
      <div className='container mx-auto'>
        <SearchBar value={searchText} handleChange={handleSearchChange} />
        <ResourceLists resourceList={searchText ? searchedResults : resourceList} />
      </div>
    </div>
  )
}

export default Resources