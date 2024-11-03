import { React, useState } from "react";
import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "./dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import AccountsData from "../../data/accountsData/AccountsData";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Axios from "axios";

const states = [
  "Kerala",
  "Karnataka",
  "Tamil Nadu",
  "Andaman & Nicobar",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tripura",
  "Uttar Pradesh",
  "Uttaranchal",
  "West Bengal",
];

const branches = [
  "CSE",
  "ME",
  "AEI",
  "ECE",
  "ADS",
  "CE",
  "EEE",
  "CSD",
  "CSBS",
  "CSCY",
  "Other",
];

const sem = ["S1", "S3", "S5", "S7", "NIL"];

function RegisterB() {
  const helleKopfeUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfKq02yfwqNIqYZVnVWUU4fh1XTHA945N2Kx2QPcQ-BM1WgkA/viewform";
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // const url = "https://tantra.herokuapp.com/register"
  // const url = "https://busy-plum-salmon-shoe.cyclic.app/register";
  const url = "https://tantra-backend.onrender.com/register";
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, fee, dept, event_id, group } = state;
  const [disable, setDisable] = useState(false);
  const [netwarning, setNetWarning] = useState(false);

  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [stateName, setstateName] = useState(null);
  const [warning, setWarning] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    fname: yup.string().required(),
    college: yup.string().required(),
    email: yup.string().email().required(),
    district: yup.string().required(),
    phno: yup.string().matches(phoneRegExp).required(),
    tid: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const RegisterData = (data) => {
    Axios.post(url, {
      event_id: event_id,
      event_name: name,
      department: dept,
      name: data.fname,
      college: data.college,
      branch: data.branch,
      semester: data.semester,
      phno: data.phno,
      email: data.email,
      stateName: data.stateName,
      district: data.district,
      tid: data.tid ? data.tid : null,
    })
      .then((response) => {
        setNetWarning(false);
        navigate("/thanks");
      })
      .catch((error) => {
        setNetWarning(true);
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    if (branch != null && semester != null && stateName != null) {
      data.semester = semester;
      data.stateName = stateName;
      data.branch = branch;
      console.log(data);
      setWarning(false);
      setNetWarning(false);
      setDisable(true);
      RegisterData(data);
    } else {
      setWarning(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="min-h-screen p-6 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 ">
                  <div className="text-gray-600">
                    <div className="font-bold text-2xl flex justify-center">
                      Register for {name}
                    </div>
                    {group && (
                      <p className="text-red-700 p-2">
                        Please fill the details of group leader.
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Full Name *</label>
                        <input
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-white"
                          placeholder="Full Name"
                          {...register("fname")}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email *</label>
                        <input
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-white"
                          placeholder="email@domain.com"
                          {...register("email")}
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Institute Name * </label>
                        <input
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-white"
                          placeholder="Institute Name"
                          {...register("college")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Branch/Class *</label>
                        <Select
                          options={branches}
                          st={branch}
                          setSt={setBranch}
                        />
                      </div>
                      {event_id === 80 ? (
                        <div className="md:col-span-5">
                          <label for="address">
                            Please upload your document as your team name in PDF
                            *
                          </label>
                          <button
                            className="btnbg h-10 border mt-1 rounded px-4 w-full text-white"
                            onClick={() => {
                              openInNewTab(helleKopfeUrl);
                            }}
                          >
                            Click to upload
                          </button>
                        </div>
                      ) : null}

                      <div className="md:col-span-3">
                        <label for="address">Semester *</label>
                        <Select
                          options={sem}
                          st={semester}
                          setSt={setSemester}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Phone Number *</label>
                        <input
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-white"
                          placeholder="Phone Number"
                          {...register("phno")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="country">State *</label>
                        <Select
                          options={states}
                          st={stateName}
                          setSt={setstateName}
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="state">District *</label>
                        <div className="h-10 bg-white flex border border-gray-200 rounded items-center mt-1">
                          <input
                            placeholder="District"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            {...register("district")}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        {fee !== "FREE" && fee !== "" && event_id !== 36 ? (
                          <div>
                            <div className="flex max-sm:flex-col justify-between">
                              <div>
                                {" "}
                                FEE: Rs. {fee}
                                <div className="text-red-900">
                                  Transfer the amount to the account mentioned
                                  below: *
                                </div>
                                <p className="text-red-600 font-medium">
                                  * Only for event registration purpose *
                                </p>
                                <div>Name: {AccountsData[dept].name}</div>
                                <div>
                                  A/c No: {AccountsData[dept].accountNo}
                                </div>
                                <div>IFSC: {AccountsData[dept].ifsc}</div>
                                <div>BANK: {AccountsData[dept].bankName}</div>
                              </div>
                              <img
                                src={AccountsData[dept].qr}
                                className="max-sm:w-24 self-center sm:h-32"
                              />
                            </div>
                            <div className="mt-2">
                              <label>
                                Transaction ID (
                                <span className="text-red-900">
                                  Enter NA for free events
                                </span>
                                ): *
                              </label>
                              <span className="flex">
                                Please enter Transaction ID{" "}
                                <span className="text-red-600 pl-3 font-medium">
                                  *Not upi id/number*
                                </span>
                              </span>
                              <input
                                type="text"
                                placeholder="Transaction ID: Eg 430#########"
                                className="h-10 border mt-1 rounded px-4 w-full bg-white"
                                {...register("tid")}
                                required
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                      {warning ? (
                        <div className="p-1 text-red-600 md:col-span-5">
                          *Please fill all the fields.
                        </div>
                      ) : null}
                      {netwarning ? (
                        <div className="p-1 text-red-600 font-bold md:col-span-5">
                          *Please check your network connection
                        </div>
                      ) : null}

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            className="submit mr-5"
                            onClick={() => {
                              navigate(-1);
                            }}
                          >
                            Cancel
                          </button>
                          <input
                            type="submit"
                            disabled={disable && !netwarning ? true : false}
                            className="submit"
                          ></input>
                          <Backdrop
                            sx={{
                              color: "#fff",
                              zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open={disable && !netwarning}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterB;
