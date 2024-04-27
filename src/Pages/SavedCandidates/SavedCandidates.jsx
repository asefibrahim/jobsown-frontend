import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "../../api/axios";
import CandidateCard from "../SearchCandidates/CandidateCard";

const SavedCandidates = () => {
  const { user } = useContext(AuthContext);
  const [myCandidates, setMyCandidates] = useState([]);
  const [mysavedCandidates, setmySavedCandidates] = useState([]);
  const [isLoading, setIsLaoding] = useState(false);
  useEffect(() => {
    setIsLaoding(true);
    axios.get(`http://localhost:5000/api/my-savedcandidatesare/${user?.email}`)
    .then(res => {
      console.log("Received candidates:", res?.data);
      setmySavedCandidates(res?.data);
      setIsLaoding(false);
    })
    .catch(err => {
      console.error("Error getting candidates:", err?.message);
    });
  }, [user?.email, myCandidates]);

  // get my saved candidates ids
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/mysaved-candidates/${user?.email}`)
      .then((res) => {
        const candidatesArry = res?.data?.map((can) => can?.candidateId);
        setMyCandidates(candidatesArry);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, [user?.email]);


  return (
    <div className="w-full py-10 px-5">
      <h3 className="text-xl font-semibold">Saved Applicants</h3>
      {
        isLoading ? <div className="flex justify-center items-center h-56 mt-5"><span className="loading loading-spinner loading-lg"></span></div> : 
        <div>
        {
            mysavedCandidates?.map(candidate => (
                <CandidateCard
                candidate={candidate}
                savedCandidates={myCandidates}
                setMyCandidates={setMyCandidates}
                width={"100%"}
                border={"1px solid black"}
                viewNum={"block"}
              />
            ))
        }
      </div>
      }
      {
        !isLoading && mysavedCandidates.length === 0 && <div className="flex justify-center items-center h-56 border mt-5 rounded-xl">
            <p className="font-medium text-gray-900">You haven't saved any candidates yet!</p>
        </div>
      }
      
    </div>
  );
};

export default SavedCandidates;
