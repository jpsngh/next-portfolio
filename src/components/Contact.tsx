import React from "react";
import {FcAddressBook, FcCallback, FcVoicemail} from "react-icons/fc"
type Props = {};
import { useForm,SubmitHandler} from "react-hook-form";
type Inputs = {
  name: string,
  email: string,
  subject:string,
  message:string
};

const Contact = (props: Props) => {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit :SubmitHandler<Inputs> =data => { window.location.href = `mailto:jpatdesk@gmail.com?subject=${data.subject}&body=  ${data.message} - Thanks ${data.name}`};
  return (
    <div className="h-screen  bg-white mx-auto max-w-7xl   items-center flex flex-col  my-5 text-left md:flex-row  justify-center  relative overflow-hidden  ">
      <div className="w-full absolute top-[40%] shadow-2xl bg-slate-800 left-0 h-[500px] skew-y-12"></div>
      <div className=" top-24 flex ">
        <h2 className=" mx-5 my-5 top-24 tracking-wider uppercase  md:tracking-[15px] text-gray-500 text-2xl z-10">
          {" "}
          Contact Me{" "}
        </h2>
        <hr className="  bg-gray-400  z-20 md:h-[90px] w-1 mx-5 border-[1px]" />
      </div>
      <div className=" z-20 my-5 mx-9 text-gray-500 cursor-pointer">
        <h4 className="flex flex-row gap-2 justify-center items-center"> <FcCallback></FcCallback> +16479799596</h4>
       
        <h4 className="flex flex-row gap-2 justify-center items-center"> <FcAddressBook></FcAddressBook><a href="mailto:jpatdesk@gmail.com">jpatdesk@gmail.com</a></h4>
      </div>

      <form className="  z-20 flex flex-col gap-5  p-5  space-y-2 shadow" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-row flex-col gap-3">
          <input {...register('name')} type="text" aria-label="name" placeholder="First Name" className="form-item p-5"></input>
          <input {...register("email")} placeholder="Email" className="form-item p-5"></input>
        </div>
        <input  {...register("subject")}type="text" placeholder="Subject" className="form-item p-5"></input>
        <textarea {...register("message")}  className="p-5 form-item " placeholder="Message"></textarea> 

        <button type="submit" className=" form-item hover:animate-bounce  p-3 border border-gray-500 text-black"> Submit </button>
      </form>
    </div>
  );
};

export default Contact;
