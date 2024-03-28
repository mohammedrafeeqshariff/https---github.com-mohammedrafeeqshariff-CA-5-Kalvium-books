import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './form.css'


function Form({sendDataToBooks}) {
  const {register, handleSubmit, formState: { errors, isSubmitSuccessful }, watch} = useForm(); //use form hook

  const navigate = useNavigate()  // useNavigate hook to change url 

  const password = watch("password"); //assigning watch property to the input tag with id "password" and storing in password variable

  const onSubmit = (data) => {
    // console.log(data);
    sendDataToBooks(data)
    toast.success("sign in successfull")
    navigate('/')  // navigating to "/" (home page) after submitting form
  };  

  console.log(isSubmitSuccessful, "success");
  return (
    <div className="formDiv">
      <h1>Create an account</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          placeholder="First name"
          id="firstname"
          {...register("firstname", {
            required: "❗First name is mandatory",
            minLength:{
              value:3,
              message:'❗Name is too short 4 letters atleast'
            },
            maxLength:{
              value:30,
              message:'❗name is too long 30 letters max'
            }
          })}
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          placeholder="Last name"
          id="lastname"
          {...register("lastname", {
            required: "❗Last name is mandatory",
            
          })}
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          {...register("email", {
            required: "❗Email is mandatory",
            pattern: {
              value: /[a-z0-9_.]+@[a-z]+\.[a-z]+/,
              message: "❗Invalid email format. Eg: someone@example.com",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register("password", {
            required: "❗Password is mandatory",
            pattern:{
              value:/[!@#$%^&*()_+\-=|{}\[\]:"';,.<>/?]/,
              message:"❗Password must contain at least 1 special character"
            },
            minLength: {
              value: 10,
              message: "❗Password must contain at least 10 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="confirm_password"
          {...register("confirm_password", {
            required: "❗Password confirmation is mandatory",
            validate: (value) =>                               // using validate property to chech weather the value of confirm password is equal to password
              value === password || "❗Passwords do not match",
          })}
        />
        {errors.confirm_password && <p>{errors.confirm_password.message}</p>}

        <button type="submit">SIGN UP</button>
        {isSubmitSuccessful && <h1>sign up successful</h1>}
      </form>
    </div>
  );
}

export default Form;
