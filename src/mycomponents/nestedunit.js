import { useState, useContext } from 'react';
import axios from 'axios';


function Nestedunit() {


    const [unitid, setunitid] = useState('');
    const [divid, setdivid] = useState('');
    const [password, setpassword] = useState('');
    const [metamaskaccount,setmetamaskaccount]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
       
    
        try {
          console.log(divid, password)
          await axios.post("http://localhost:8000/Registration/Nestedunit", {
            divid,unitid, password,metamaskaccount
          }).then(res => {
            if (res.data == "exist") {
              alert("user already exist");
            }
            else if (res.data == "not exist") {
          console.log("registered");
          alert("registered");
          window.location.reload();
            }
          }).catch(e => {
            console.log(e);
            alert("wrong details");
          })
    
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    return(<>
     <section id="sai">
     <form onSubmit={handleSubmit} >
           <div className="row position-relative justify-content-center align-items-center"> 
           
                  <div className="p-4 col-5 mt-5 p-md-5 border rounded-3 bg-body-tertiary text-truncate">
                <h1> Units Registration</h1>
                       <div className="form-floating mb-3 mt-5 text-truncate">
                           <input  className="form-control" id="f1" placeholder="DIVISION ID" onChange={(e) => setdivid(e.target.value)} required  />
                           <label for="floatingInput">DIVISION ID</label>
                       </div>
                       <div className="form-floating mb-3 text-truncate">
                           <input  className="form-control" id="f2" placeholder="UNIT ID" onChange={(e) => setunitid(e.target.value)} required  />
                           <label for="floatingInput">UNIT ID</label>
                       </div>
                       <div className="form-floating mb-3 text-truncate">
                           <input  className="form-control" id="f2" placeholder="Meta Mask Account" onChange={(e) => setmetamaskaccount(e.target.value)} required  />
                           <label for="floatingInput">Meta Mask Account</label>
                       </div>
                    
                       <div className="form-floating mb-3 text-truncate">
                           <input type="password" className="form-control" id="f3" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
                           <label for="floatingPassword">Password</label>
                       </div>
                       
                       <button className="w-100 btn btn-lg btn-primary" type="submit"   >Register</button>
                       <hr className="my-4"/>
                       <small className="text-body-secondary">By clicking Register ,it will add to database</small>
                   </div>
                   </div>
   </form>
           </section>
   
   
    </>);
}
export default Nestedunit;