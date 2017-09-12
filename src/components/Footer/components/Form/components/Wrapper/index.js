import styled from 'styled-components'
import imgError from './error.svg'

export default styled.div`
  form{
    position: relative;
  }

  /* FORM MESSAGE */

  .showThankYou{
    position: absolute;
    background-color: #FFFFFF;
    padding: 30px;
    left: 0;
    right: 0px;
    top: 0;
    bottom: 0;
    text-align: center;
    opacity: 0;
    z-index: -1;
  }

  .showThankYou div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  } 

  /*  FORM ANIMATIONS */

  .fadeInClass {
    -webkit-animation: fadeInOut 5s linear forwards;
    animation: fadeInOut 5s linear forwards;
    opacity: 0;
    z-index: 4;
  }

  @-webkit-keyframes fadeInOut {
    5% { opacity: 1; }
    40% { opacity: 0.75; }
    60% { opacity: 0.5; }
    80% { opacity: 0.25; }
    100% { opacity: 0; }
  }

  @keyframes fadeInOut {
    5% { opacity: 1; }
    40% { opacity: 0.75; }
    60% { opacity: 0.5; }
    80% { opacity: 0.25; }
    100% { opacity: 0; }
  }

  /*  ERROR ICON */

  .errorIcon{
    background-image: url('${imgError}');
    background-repeat: no-repeat;
    background-position: 310px 10px;
    background-size: 15px
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
    &:focus{
    outline: 0;
    }
  }

  textarea {
    resize: none; 
    height: 100px;
    padding-top: 6px;
  }

  input { 
    height: 30px;
    margin-bottom: 15px;
  }

  button{
    border: 2px solid #196e8e;
    padding: 8px 15px;
    text-align: center;
    font-size: 14px;
    background-color: #196e8e;
    color: #FFFFFF;
    margin-top: 15px;
    width: 100%;
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
