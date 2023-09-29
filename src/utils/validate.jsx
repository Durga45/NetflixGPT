
export const checkValidData=(email,password)=>{
  
   const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    
   if(!isEmailValid) return " email ID is not valid";
   if(!isPasswordValid) return "password not valid";

   return null
};