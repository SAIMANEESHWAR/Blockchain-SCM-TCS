import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import laptopimg from "./homephotos/image_3.jpg"
import { useNavigate } from "react-router-dom";
import { AppContext } from './passabiaddress';


function Logindiv() {
  const navigate = useNavigate();
  const {account2 } = useContext(
    AppContext
  );

  // useEffect(() => {
  //     const onload1 = async () => {
  //     if (window.ethereum !== "undefined") {
  //         const { ethereum } = window; 
  //         console.log("connected");
  //         const acconts = await ethereum.request({ method: "eth_requestAccounts" });

  //        let accont = acconts[0];

  //     } else {
  //         console.log("not connected");

  //     }
  //     window.web3 = await new Web3(window.ethereum);
  //     setlogincontract(await new window.web3.eth.Contract(variable1,variable2) );
  // }

  // onload1();
  // }, []);


  const [divid, setf1] = useState('');

  const [password, setf3] = useState('');

  const handleInputChange1 = (event) => {
    setf1(event.target.value);
  };


  const handleInputChange3 = (event) => {
    setf3(event.target.value);
  };


  const sub = async (e) => {
    /* */

    e.preventDefault();



    try {


      await axios.post("http://localhost:8000/Logindiv", {
        divid, password
      }).then(res => {
        if (res.data != "not exist") {
          if (res.data.checkeddata.metamaskaccount.toLowerCase() == account2.toLowerCase()) {
            sessionStorage.setItem('alldivids', divid);
            var button = document.getElementById('myButton');
            button.click();
            navigate("/Divnewreq");
          }
          else {
            alert("connect to proper meta mask account");
          }
        }
        else if (res.data == "not exist") {
          alert("entered details were not correct");
        }
      }).catch(e => {
        console.log(e);
        alert("wrong details error in try block");
        //just for now
        sessionStorage.setItem('alldivids', divid);
            var button = document.getElementById('myButton');
            button.click();
        navigate("/Divnewreq");
      })


    } catch (error) {
      console.error('Error:', error);
    }
    /* */


    console.log("i came here1");






    //     let f1 = document.getElementById("f1").value;
    //     let f3 = document.getElementById("f3").value;



    //     const didpass=await logincontract.methods.adddivreturns().call();
    //    var alldivid=didpass[0];
    //    var alldivpass=didpass[1];


    //     var r=0;

    //         for(var i=0;i<alldivid.length;i++){
    //             if(alldivid[i]==f1){
    //                 if(alldivpass[i]==String(f3)){
    //                     sessionStorage.setItem('alldivids',f1);

    //                     console.log("success");
    //                     r=1;
    //                     navigate('/Divnewreq');
    //                     window.location.reload();
    //                     // document.location.href="divnewreq.html";
    //                 }
    //             }
    //         }

    //         if(r==0){
    //             console.log("wrong password or wrong id");
    //         }








  };


  return (
    <>
      <section className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-aos="fade-down">
        <div className="container-fluid" style={{ width: '100%' }}>

          <div className='d-flex flex-row mb-3'>
            <div className="mt-3"><h1>Home-Division</h1></div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navfont">

              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
              <li className="nav-item-22">
                <div className="profile-23">
                  <i className="fa-sharp fa-solid fa-bell"></i>
                </div>
              </li>


              <li className="nav-item">

                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <div className="profile-23">
                    <a>login</a>
                  </div>
                </button>


              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Modal -1--> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">SIGN IN FORM</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="POST" >
              <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3">
                  <input className="form-control" id="f1" placeholder="DIVISION ID" onChange={handleInputChange1} />
                  <label for="floatingInput">DIVISION ID</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="f3" placeholder="Password" onChange={handleInputChange3} />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                 
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={sub} >Sign in</button>
               
              </div>
            </form>
            <div className="modal-footer">
              <button type="button" id="myButton" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundImage: `url(${laptopimg})`, backgroundSize: "cover" }}>
        <div className="container-fluid  " style={{ marginTop: '100px' }}>
          <div className="row p-4 pe-3 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3   mt-5" >
            <div className="col-lg-7 p-3 p-lg-5  pt-lg-3" style={{ marginTop: '310px' }}>
              <div className='justify-content-center align-middle'>
                <h1 className="display-4 fw-bold mt-3  lh-1 mb-3 text-info-emphasis">SUPPLY CHAIN </h1>
                <h1 className="display-4 fw-bold lh-1 mt-3 fs-1 text-success-emphasis ms-4">MANAGE - MENT</h1>
                <p className="lead mb-5 ms-5 mt-3 fst-italic text-success">Place to Supply Goods</p>
              </div>
              <div className="d-grid gap-2 mt-3 ms-5 d-md-flex justify-content-md-center mb-4 mb-lg-3">

              </div>
            </div>
            {/* <div className="p-3 col-md-10 mx-auto col-lg-4 p-md-5 border rounded-3 bg-body-tertiary mb-5 me-5  ">
              <div className='offset-lg-1  overflow-hidden shadow-lg mb-3'>
             
                    <img src={laptopimg} className="img-fluid " alt="..."/>
              </div>
                  </div> */}

          </div>
        </div>
      </section>


    </>
  );
}

export default Logindiv;  