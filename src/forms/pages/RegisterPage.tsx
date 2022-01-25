import '../styles/styles.css'



export const RegisterPage = () => {

    return (

        <div>
            <h1>Register Page</h1>



            <form >
                
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="email"
                    placeholder="Email" 
                />
                <input 
                    type="password"
                    name="Password1" 
                    placeholder="Password"
                    id="" 
                />
                <input
                    type="password" 
                    name="Password2" 
                    placeholder="Repeat Password"
                    id="" 
                />
                <button type="submit"> Create</button>


            </form>




        </div>
        )
};
