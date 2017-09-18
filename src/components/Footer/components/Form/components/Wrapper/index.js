import styled from 'styled-components'
import imgError from './error.svg'

export default styled.div`

  /* FORM MESSAGE */

  .showMessage{
    color: #FFFFFF;
    transform: transition 4s all;
  }

  /*  FORM ANIMATIONS

  .fadeInClass {
    opacity: 1;
  }

  /*  ERROR ICON */

  .errorIcon{
    background-image: url('${imgError}');
    background-repeat: no-repeat;
    background-position: 310px 8px;
    background-size: 15px;
  }

  /*  FORM */

  input,
  textarea,
  button{
    font-family: 'calluna-sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    display: block;
  }

  input,
  textarea {
    width: 98%;    
    border: 0;
    border-radius: 2px;
    padding-left: 2%;
    padding-right: 0;
    padding-bottom: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,.6);
    background-color: inherit;
    color: #FFF;
    height:30px;
    -moz-transition: border-color .4s ease-in-out;
    -webkit-transition: border-color .4s ease-in-out;
    -o-transition: border-color .4s ease-in-out;
    transition: border-color .4s ease-in-out;
    &:focus{
      outline: 0;
      border-bottom: 1px solid rgba(255,255,255,1);
    }
    &::-webkit-input-placeholder {
      color: #FFFFFF;
    }
    &::-moz-placeholder {
        color: #FFFFFF;
    }
    &::-moz-placeholder {
        color: #FFFFFF; 
    }
    &::-ms-input-placeholder {
        color: #FFFFFF;
    }
  }

  textarea {
    resize: none;
    -moz-transition: height 1s ease;
    -webkit-transition: height 1s ease;
    -o-transition: height 1s ease;
    transition: height 1s ease;
  }

  input { 
    padding-bottom: 2%;
  }

  button{
    border: 2px solid #196e8e;
    padding: 8px 15px;
    text-align: center;
    font-size: 14px;
    background-color: #196e8e;
    color: #FFFFFF;
    margin: 20px auto 0 auto;
    width: 50%;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover,
    &:active,
    &:focus{
      background-color: #166482;
      border: 2px solid #166482;
      color: #FFFFFF;
      outline: 0;
    }
  }
}`
