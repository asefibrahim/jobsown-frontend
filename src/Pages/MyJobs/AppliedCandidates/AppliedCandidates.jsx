import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";
import candidateImg from "../../../assets/candidate.jpg";
const AppliedCandidates = () => {
  const { id } = useParams();
  console.log("Mr Params", id);
  const [candidates, setCandidates] = useState([]);
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateInfo, setCandidateInfo] = useState("");
  const [candidateData, setCandidateData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:5000/api/applied-candidates/${id}`)
      .then((res) => {
        setCandidates(res?.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user-data/${candidateEmail}`)
      .then((res) => {
        setCandidateData(res?.data);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, [candidateEmail]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/candidate-info/${candidateEmail}`)
      .then((res) => {
        setCandidateInfo(res?.data);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, [candidateEmail]);
  console.log("THe modal candidate is", candidateInfo);
  console.log("THe modal candidate data is", candidateData);
  return (
    <div className="w-full py-10">
      <h2 className="text-xl font-semibold">Applied Candidates</h2>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>Name</th>
                <th>Email</th>
                <th>Job Role</th>
                <th>Action</th>
              </tr>
            </thead>
              <tbody>
              {candidates?.map((candidate) => (
                <tr key={candidate?._id} className="">
                  <th className="text-base font-normal">{candidate?.name}</th>
                  <td>{candidate?.email}</td>
                  <td>
                    {candidate?.title || (
                      <span className="font-medium text-gray-400">Not set</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() =>{
                        setCandidateEmail("");
                        document.getElementById("my_modal_2").showModal();
                        setCandidateEmail(candidate?.email)
                      }
                      }
                      className="bg-[#0C35E9] text-white px-4 py-2 rounded-md font-medium"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {
            isLoading && <div className="h-56 flex justify-center items-center w-full"><span className="loading loading-spinner loading-lg"></span></div>
          }
          {
            !isLoading && candidates.length === 0 && <div className="h-56 flex justify-center items-center w-full"><span className="">There has no applicant applied for the job</span></div>
          }
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-[1000px] min-h-[80vh]">
          <div>
            <img className="w-24 h-24" src={candidateImg} alt="" />
            <div className="flex mt-4 border-b pb-1">
            <p className="mt-2 flex-1"><span className="font-medium">Age:</span> {candidateInfo?.age || 'Not set'}</p>
            <p className="mt-2 flex-1"><span className="font-medium">Gender:</span> {candidateInfo?.gender || 'Not set'}</p>
            </div>
            <div className="flex border-b pb-1">
            <p className="mt-2 flex-1"><span className="font-medium">Name:</span> {candidateInfo?.name || candidateData?.name}</p>
            <p className="mt-2 flex-1"><span className="font-medium">Email:</span> {candidateInfo?.email || candidateData?.email || 'Not set'}</p>
            </div>
            <div className="flex border-b pb-1">
            <p className="mt-2 flex-1"><span className="font-medium">Education:</span> {candidateInfo?.education || 'Not set'}</p>
            <p className="mt-2 flex-1"><span className="font-medium">Location:</span> {candidateInfo?.location || 'Not set'}</p>
            </div>
            <div className="flex"> 
            <p className="mt-2  border-b pb-1 flex-1"><span className="font-medium">Total Experience Years:</span> {candidateInfo?.experience_years || 'Not set'}</p>
            <p className="mt-2  border-b pb-1 flex-1"><span className="font-medium">Phone:</span> {candidateInfo?.phone_number || 'Not set'}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Experrience</h3>
              {
                candidateInfo?.experience?.length > 0 ? candidateInfo?.experience?.map((expe, indx) => (
                  <div className="mb-4">
                  <div className="flex border-b pb-1">
                  <p className="mt-2 flex-1"><span className="font-medium">0{indx + 1}. Company Name:</span> {expe?.company || 'Not set'}</p>
                  <p className="mt-2 flex-1"><span className="font-medium">Title:</span> {expe?.title || 'Not set'}</p>
                  </div>
                  <div className="flex border-b pb-1">
                  <p className="mt-2 flex-1"><span className="font-medium">Department:</span> {expe?.department || 'Not set'}</p>
                  <p className="mt-2 flex-1"><span className="font-medium">Industry:</span> {expe?.industry || 'Not set'}</p>
                  </div>
                  <div className="flex border-b pb-1">
                  <p className="mt-2 flex-1"><span className="font-medium">Job Role:</span> {expe?.job_role || 'Not set'}</p>
                  <p className="mt-2 flex-1"><span className="font-medium">Start Date:</span> {expe?.start_date || 'Not set'}</p>
                  </div>
                  <div className="flex border-b pb-1">
                  <p className="mt-2 flex-1"><span className="font-medium">End Date:</span> {expe?.end_date || 'Not set'}</p>
                  <p className="mt-2 flex-1"><span className="font-medium">Job City:</span> {expe?.job_city || 'Not set'}</p>
                  </div>
                  </div>
                )) : <p className="mt-2 text-gray-500 pb-5">Not added yet</p>
              }
            </div>
            <div className="mb-4">
            <h3 className="text-xl font-semibold">Languages</h3>
              <div className="flex gap-5 mt-2">
              {
                candidateInfo?.languages?.length > 0 ? candidateInfo?.languages?.map(lan => (
                  <p className="bg-gray-200 px-3 py-1.5 rounded-md">{lan}</p>
                )) : <p className="text-gray-500">Not added yet</p>
              }
              </div>
            </div>
            <div className="mb-4">
            <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex gap-5 mt-2">
              {
                candidateInfo?.skills?.length > 0 ? candidateInfo?.skills?.map(lan => (
                  <p className="bg-gray-200 px-3 py-1.5 rounded-md">{lan}</p>
                )) : <p className="text-gray-500">Not added yet</p>
              }
              </div>
            </div>
            <div className="mb-4">
            <h3 className="text-xl font-semibold">Job Preferences</h3>
              <div className="flex items-center gap-5">
              <h4 className="mt-2">Employeement Type: </h4>
              <div className="flex mt-2">
              {
                candidateInfo?.job_preferences?.employment_type?.length > 0 ? candidateInfo?.job_preferences?.employment_type?.map(lan => (
                  <p className="border px-3 py-1.5 rounded-md">{lan}</p>
                )) : <p className="text-gray-500">Not added yet</p>
              }
              </div>
              </div>
              <div className="flex items-center gap-5 mt-2">
              <h4 className="mt-2">Preferred Workplace: </h4>
              <div className="flex mt-2">
              {
                candidateInfo?.job_preferences?.preferred_workplace?.length > 0 ? candidateInfo?.job_preferences?.preferred_workplace?.map(lan => (
                  <p className="border px-3 py-1.5 rounded-md">{lan}</p>
                )) : <p className="text-gray-500">Not added yet</p>
              }
              </div>
              </div>
              <div className="flex items-center gap-5 mt-2">
              <h4 className="mt-2">Preferred Shift: </h4>
              <div className="flex mt-2">
              {
                candidateInfo?.job_preferences?.preferred_shift?.length > 0 ? candidateInfo?.job_preferences?.preferred_shift?.map(lan => (
                  <p className="px-3 py-1.5 rounded-md border">{lan}</p>
                )) : <p className="text-gray-500">Not added yet</p>
              }
              </div>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AppliedCandidates;
