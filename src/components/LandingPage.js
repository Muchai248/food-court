import { BrowserRouter } from "react-router-dom"

export default function LandingPage({restaurant, setRestaurant, currentindex,  setCurrentIndex}){
    const current=[
        1,2,3,4
    ]


function handleLeft(){
    console.log(currentindex)
    if(currentindex>0){
     setCurrentIndex(currentindex-1)
    }
    console.log(currentindex)
}

function handleRight(){
    if(currentindex<current.length){
     setCurrentIndex(currentindex+1)
    }
    console.log(currentindex)
}

    return(
        <div className="homepage">
            <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width="100%" height="100%"/>
            <div className="homename">name</div>
             <div className="homedescription"> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
             "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
       </div>
            <div className="arrowleft" onClick={handleLeft}> arrow left</div>
            <di className="arrowright" onClick={handleRight}> arrow right </di>
            <div className="circle"> 
                <div className="indicator"> a </div>
                <div className="indicator"> b</div>
                <div className="indicator"> c</div>
             </div>
            
        </div>
    )

 
}