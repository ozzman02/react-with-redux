import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

export default function UserList() {
   
   const dispatch = useDispatch();

   /* 
      state.users = { data: [], isLoading: false, error: null }
      destructuring -> { isLoading, data, error } 
   */
   const { isLoading, data, error } = useSelector((state) => {
      return state.users;
   });

   useEffect(() => {
      dispatch(fetchUsers())
   }, [dispatch]);

   if (isLoading) {
      //return <div>Loading...</div>;
      return <Skeleton times={6}/>
   }

   if (error) {
      return <div>Error fetching data...</div>
   }

   return (
    <div>{data.length}</div>
   );
}