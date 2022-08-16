import React from 'react'
import ButtonSignUp from '../ButtonSignUp/ButtonSignUp'
import ButtonSocialMedia from '../ButtonSocialMedia/ButtonSocialMedia'
import Input from '../Input/Input'
import LogoBox from '../Logo/Logo'
import './Form.scss'

const Form = () => {
   return (
      <form className="form">
         <LogoBox/>
         <h2>Welcome!</h2>

         <p className="welcome-text">Please log in to continue</p>

         <Input type={'text'} label={'Username'}/>
         <Input type={'password'} label={'Password'}/>
         <p className = "line"><input type="checkbox"/><span className='remember-text'>Remember me</span><span className='forgot-password'>Forgot your password?</span></p>
         <ButtonSignUp />

         {/* <p className="sign-up-text">ou faça login com outra conta</p>
         
         <div className="buttons-social-media">
            <ButtonSocialMedia
               icon={'logos:facebook'}
               button_name={'ENTRAR COM FACEBOOK'}
            />
            <ButtonSocialMedia
               icon={'flat-color-icons:google'}
               button_name={'ENTRAR COM GOOGLE'}
            />
         </div> */}
         
         

      </form>
   )
}

export default Form
