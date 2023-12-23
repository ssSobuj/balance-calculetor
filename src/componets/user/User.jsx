/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import "./user.css";
export default function User() {
  const userdata = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div  className="container">
        <div className="single-card">
          <img src={`/img2/${userdata.id}.jpg`} alt="" />
          <h1>{userdata?.name?.slice(0, 15)}</h1>
          <h4>{userdata?.email}</h4>
          <p>{userdata?.website}</p>
          <p>{userdata?.company.name}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    </>
  );
}
