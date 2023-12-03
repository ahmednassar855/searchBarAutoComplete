import { Outlet, useLoaderData } from "react-router-dom";
import React, { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const loader = async () => {
  
  try {
    const  {data}  = await customFetch.get("/cars");
    return  {data} ;
  } catch (error) {
    // const err = error?.response?.data?.msg;
    return error;
  }
};

const SearchingDataContext = createContext();

const Layout = () => {
  const {data} = useLoaderData();

  return (
    <SearchingDataContext.Provider value={{ data }}>
      <Navbar/>
      <SearchBar />
      <Footer/>
    </SearchingDataContext.Provider>
  );
};

export const useAllSearchingDataContext = () =>
  useContext(SearchingDataContext);

export default Layout;
