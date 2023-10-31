import React from "react";
import '../../App.css';
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-lg">
        <h1 className="uppercase mt-16 text-center text-secondary font-bold text-2xl">
          BOOK AN EXCURSION
        </h1>
        <h1 className=" mt-5 text-center text-primary font-bold text-7xl">
          Reserve Your Visit
        </h1>
        <div className=" mt-5 text-center text-secondary font-bold text-7xl">
          . . .
        </div>
        <div className=" mt-8 px-20 lg:px-72 text-primary text-center font-light text-lg">
          Would you like to see our space before joining? Come and visit our
          coworking space. Please fill out the form and our manager will get
          back to you asap.
        </div>

        <div className="m-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:mb-6 flex flex-col md:flex-row  ">
              <div className="relative z-0 w-full md:w-1/2 mb-6 group md:pr-4 h-20">
                <input
                  {...register("fName", { required: true, minLength: 3 })}
                  aria-invalid={errors.fName ? "true" : "false"}
                  type="name"
                  name="fName"
                  id="fName"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="  "
                  
                />
                {errors.fName?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Name is required</p>
                )}
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>

              <div className="relative z-0 w-full md:w-1/2 mb-6 group h-20">
                <input
                  {...register("lName", { required: true })}
                  aria-invalid={errors.lName ? "true" : "false"}
                  type="name"
                  name="lName"
                  autoComplete="off"
                  id="lName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="  "
                  
                />
                {errors.lName?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Name is required</p>
                )}
                <label
                  htmlFor="lName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="md:mb-6 flex flex-col md:flex-row ">
              <div className="relative z-0 w-full md:w-1/2 mb-6 group md:pr-4 h-20">
                <input
                  {...register("number", { required: true, minLength: 5  })}
                  aria-invalid={errors.number ? "true" : "false"}
                  type="number"
                  name="number"
                  id="number"
                  autoComplete="off"
                  className="block custom-input py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  
                  
                />
                {errors.number?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Contact No is required</p>
                )}
                <label
                  htmlFor="number"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Contact No
                </label>
              </div>

              <div className="relative z-0 w-full md:w-1/2 mb-6 group h-20">
                <input
                 {...register("email", {
                  required: "Email Address is required", pattern:(value) => {
                      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return true;
                      }
                      return "Invalid Email Address";
                    },
                })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Email Address is required</p>
                )}
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>
            </div>
            <div className="md:mb-6 flex flex-row h-20">
              <div className="relative z-0 w-full  mb-6 group">
                <input
                  {...register("date", { required: true })}
                  aria-invalid={errors.date ? "true" : "false"}
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="  "
                  
                />
                {errors.date?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Date is required</p>
                )}
                <label
                  htmlFor="date"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date
                </label>
              </div>
            </div>

            <div className="md:mb-6 flex flex-row h-20">
              <div className="relative z-0 w-full  mb-6 group ">
                <input
                  {...register("about", { required: true })}
                  aria-invalid={errors.about ? "true" : "false"}
                  type="text"
                  name="about"
                  id="about"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="  "
                  
                />
                {errors.about?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> This Field is required</p>
                )}
                <label
                  htmlFor="text"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  How Did You Hear About Us
                </label>
              </div>
            </div>

            <div className="mb-6 flex flex-row h-20">
              <div className="relative z-0 w-full  mb-6 group ">
                <input
                  {...register("message", { required: true })}
                  aria-invalid={errors.message ? "true" : "false"}
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="  "
                  
                />
                {errors.message?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Message is required</p>
                )}
                <label
                  htmlFor="text"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
            </div>

            <div className="pb-24 md:pb-16 flex flex-col max-h-16 justify-start pl-[1.5rem]">
                <div className="flex gap-3 items-center">

              <input
                {...register("checkBox", { required: true })}
                className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                name="checkBox"
                id="exampleCheck10"
                />
              
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck10"
                >
                I agree that my submitted data is being collected and stored.
              </label>
                  </div>
              {errors.checkBox?.type === "required" && (
                  <p className="text-red-500" role="alert"><a className="font-extrabold text-xl">*</a> Check Box is required</p>
                )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="  bg-primary py-5 px-10  text-lg font-semibold uppercase leading-normal hover:underline text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
