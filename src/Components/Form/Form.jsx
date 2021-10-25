import React from 'react'
import ButtonSignUp from '../ButtonSignUp/ButtonSignUp'
import ButtonSocialMedia from '../ButtonSocialMedia/ButtonSocialMedia'
import Input from '../Input/Input'
import './Form.scss'

const Form = () => {
   return (
      <form className="form">
         <h2>Olá, somos a Prioty!</h2>

         <p className="welcome-text">Uma empresa que inspira novas maneiras de aprender, combinando software de código aberto com facilidade de uso. Crie sua conta para conhecer nossos serviços!</p>

         <Input type={'text'} label={'Nome completo'} icon={"ant-design:user-outlined"} />
         <Input type={'email'} label={'E-mail'} icon={"carbon:email"} />
         <Input type={'password'} label={'Senha'} icon={"bi:eye-slash"} />

         <ButtonSignUp />

         <p className="sign-up-text">ou faça login com outra conta</p>

         <div className="buttons-social-media">
            <ButtonSocialMedia
               icon={'logos:facebook'}
               button_name={'ENTRAR COM FACEBOOK'}
            />
            <ButtonSocialMedia
               icon={'flat-color-icons:google'}
               button_name={'ENTRAR COM GOOGLE'}
            />
         </div>

         <p className="sign-in-text">Já possui uma conta? <span>Entrar</span></p>

      </form>
   )
}

export default Form
