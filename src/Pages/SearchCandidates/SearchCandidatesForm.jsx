import Sidebar from "../FinalHomeScreen/SideBar";
import searchIconBlack from "../../assets/searchIconWhite.png";
import plusIcon from "../../assets/plusIcon.png";
import { useState } from "react";
const educationsArry = ["10th Pass", "12th Pass", "Diploma", "ITI", "Graduate", "Post Graduate"];
const SearchCandidatesForm = () => {
    const [education, setEducation] = useState("");
    return (
        <div className="w-full my-9 ml-16 font-RedHatDisplay">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-semibold text-[#2B2B2B]">Search Candidates</h4>
                <label htmlFor="submitSearch" className="flex items-center bg-[#000099] gap-2 text-white px-3 py-2.5">
                    <span>Search candidates</span>
                    <img className="w-6 h-6" src={searchIconBlack} alt="" />
                </label>
            </div>
            <div className="mt-7">
                <form action="/employee-dashboard/search-candidate">
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Keywords <span className="text-red-500">*</span></label>
                        <input type="text" className="bg-[#F3F3F3] px-7 py-2.5 mt-2 rounded-lg outline-none" name="keyword" id="" placeholder="Enter keyword such as job title, skills,etc" required />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="font-semibold" htmlFor="">Current city</label>
                        <input type="text" className="bg-[#F3F3F3] px-7 py-2.5 mt-2 rounded-lg outline-none" name="current_city" id="" placeholder="Type to search city" />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="font-semibold" htmlFor="">Experience</label>
                        <div className="flex gap-5">
                        <select className="bg-[#F3F3F3] w-72 px-3 py-2.5 mt-2 outline-none font-medium rounded-md" name="min_experience" id="" placeholder>
                            <option className="text-[#888888]" value="">Minimum experience</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <select className="bg-[#F3F3F3] w-72 px-3 py-2.5 mt-2 outline-none font-medium rounded-md" name="max_experience" id="" placeholder>
                            <option className="text-[#888888]" value="">Maximum experience</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="font-semibold" htmlFor="">Annual salary</label>
                        <div className="flex gap-5">
                        <select className="bg-[#F3F3F3] w-72 px-3 py-2 mt-2.5 outline-none font-medium rounded-md" name="min_salary" id="" placeholder>
                            <option className="text-[#888888]" value="">Min.  salary in lakhs</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option className="text-black" value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <select className="bg-[#F3F3F3] w-72 px-3 py-2 mt-2.5 outline-none font-medium rounded-md" name="max_salary" id="" placeholder>
                            <option className="text-[#888888]" value="">Max. salary in lakhs</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option className="text-black" value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        </div>
                        <div className="mt-7">
                        <label className="font-semibold" htmlFor="">Highest education</label>
                        <input type="hidden" name="education" value={education} />
                        <div name="education" className="bg-[#F3F3F3] px-5 py-4 mt-2 rounded-lg flex gap-4">
                            {
                                educationsArry?.map(Singleeducation => (
                                      <span onClick={() => setEducation(Singleeducation)} className={`border rounded-full border-gray-400 px-3 py-2 font-medium flex gap-1 items-center ${education === Singleeducation && "border-[#000099] text-[#000099] border-2"}`}><span className="font-semibold">{Singleeducation}</span> <img className="w-5 h-5" src={plusIcon} alt="" /></span>
                                ))
                            }
                            
                        </div>
                        </div>
                        <button id="submitSearch" type="submit" className="items-center bg-[#000099] gap-2 text-white px-3 py-2.5 hidden">
                       </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchCandidatesForm;