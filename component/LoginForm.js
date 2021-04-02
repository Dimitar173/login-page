import Login from "../pages/login";
import React from 'react';


class LoginForm extends React.Component {

    state = {

        email: ' ',

        password: ' ',

        username : '  '

    };

    handleChange = event =>{
        this.setState ({[event.target.name]: event.target.value});
    }

handleSubmit = event =>{
        event.preventDefault();
        
       
        console.log (this.state);
    }
    render (){


        return (
          /*
            <div className= "login-form">
            <h1 style={{color:"blue"}}> Најавете се </h1>
            <form className="form" onSubmit= {this.handleSubmit}>
            
            <div> <input type = "email" name="email" placeholder="Внесете е-маил" onChange = {this.handleChange}/></div> 
            <div> <input type = "text" name= "text" placeholder ="Внесете корисничко име"/></div> 
            <div> <input type = "password" name= "password" placeholder ="Внесете лозинка"/></div> 
            
            
            <button className="button-login" type ="submit"> Најава </button>
           
            </form>

            </div>

*/



            <div class="box">
	<form onSubmit={this.handleSubmit}>
		<span class="text-center">Најавете се</span>
	<div class="input-container">
		<input type = "text" name= "text" placeholder ="Внесете корисничко име"/>
		<label>Корисничко Име</label>		
	</div>
	<div class="input-container">		
		<input type = "email" name="email" placeholder="Внесете е-маил" onChange = {this.handleChange}/>
		<label>Е-маил</label>
	</div>
    <div class="input-container">		
		<input type = "password" name="password" placeholder="Внесете лозинка" onChange = {this.handleChange}/>
		<label>Лозинка</label>
	</div>
		<button type="submit" class="btn">Најава</button>
</form>	
</div>
        )
    }

    }
    export default LoginForm;