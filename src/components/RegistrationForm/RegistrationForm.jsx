import React from "react";
import style from  "./RegistrationForm.module.css"
import { useForm } from "react-hook-form";
import { postApi, addUser } from '../../store/services/postApi';

function RegistrationForm(){
    const [addUser, {}] = postApi.useAddUserMutation()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const re = '/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/';

    console.log(errors)
    
    const onSubmit = (values) => {
        addUser(values)

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
            <div className={style.input}><input className={errors.name && style.error} type="text" placeholder="Name" {...register("name", {pattern:  {value: /^[a-zA-Z0-9]{2,15}$/
, message: "Username must be 2-15 characters long, contain only letters and numbers"}, required: 'Required field'})} />
            {errors.name &&<span className={style.error}>{errors.name.message}</span>}</div>
            <div className={style.input}><input className={errors.name && style.error} type="email" placeholder="Email" {...register("email", {pattern:  {value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
, message: "Invalid email format"}, required: 'Required field'})}/>
            {errors.email &&<span className={style.error}>{errors.email.message}</span>}</div>
            <div className={style.input}><input className={errors.name && style.error} type="password" placeholder="Password" {...register("password", {pattern:  {value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s)[a-zA-Z0-9]*.{8,20}$/



, message: "Password nmust be 8-20 characters long, and contain at least one uppercase letter, one lowercase letter, and one digit"}, required: 'Required field'})}/>
            {errors.password &&<span className={style.error}>{errors.password.message}</span>}</div>
<button type="submit" >Submit</button>
        </form>
    )
}

export default RegistrationForm