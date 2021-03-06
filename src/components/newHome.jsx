import "./Home.css";
import { ImTrophy, ImCheckmark } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs"
import { useEffect, useState } from "react";

export const Home = () => {

  const [text, setText] = useState("");
  const [inputList, setInputList] = useState([{ todos: ""}]);
  const [text2, setText2] = useState([])

 const handleAddone = () => {
    const payload = {
      note: text,
     
    }
    fetch("http://localhost:8080/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    }).then(getData);
    
  }

async function getData()
{
    var res = await fetch("http://localhost:8080/todos")
    var data  = await res.json()
   
    setText2(data);
}

  useEffect(() => {
    getData();
  },[text])


  const handleAddClick = () => {
    setInputList([...inputList, {todos: ""}])
  }

  return (
    <div style={{ marginLeft: 80 }} className="apporvacontainer">
      <div className="left">
        <div className="left_boxes">
          <div className="start">
            <ImTrophy
              style={{ color: "#f2c069", width: "25px", height: "25px" }}
            />
            <h3 style={{ marginLeft: "20px", color: "#666" }}>
              Getting Started
            </h3>
          </div>
          <div style={{ color: "#666", padding:"10px" }}>
            Successful marketers complete these milestones within their first
            week.
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "75%",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gridGap: "10px",
              }}
            >
              <div className="small_boxes">
                <div>
                  <AiFillCloseCircle className="cross" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>View the Getting Started Guide</b>
                  <p>
                    Get tips & best practices to organize all of your marketing
                    on your new calendar
                  </p>
                </div>
              </div>
              <div className="small_boxes">
                <div>
                  <AiFillCloseCircle className="cross" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>View the Getting Started Guide</b>
                  <p>
                    Get tips & best practices to organize all of your marketing
                    on your new calendar
                  </p>
                </div>
              </div>
              <div className="small_boxes">
                <div>
                  <AiFillCloseCircle className="cross" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>View the Getting Started Guide</b>
                  <p>
                    Get tips & best practices to organize all of your marketing
                    on your new calendar
                  </p>
                </div>
              </div>
              <div className="small_boxes">
                <div>
                  <AiFillCloseCircle className="cross" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>View the Getting Started Guide</b>
                  <p>
                    Get tips & best practices to organize all of your marketing
                    on your new calendar
                  </p>
                </div>
              </div>
              <div className="small_boxes">
                <div>
                  <AiFillCloseCircle className="cross" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <b>View the Getting Started Guide</b>
                  <p>
                    Get tips & best practices to organize all of your marketing
                    on your new calendar
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "25%",
                // border: "red solid 1px",
                height: "300px",
                marginLeft: "10px",
              }}
            ></div>
          </div>
        </div>
        <div className="left_boxes">
          <div style={{ textAlign: "center" }}>
            <h3 style={{ padding: "10px" }}>
              Quickly add import projects to your calendar
            </h3>
            <p>
              Click on the tool you currently use to manage your projects or
              <span style={{ color: "darksalmon" }}>
                Download our CSV template.
              </span>{" "}
              The Bulk Project Import tool is also available via the Create
              menu.
            </p>
            <div className="brands">
              <div style={{display:"flex",marginBottom:"30px"}}>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/microsoft-excel-b2fbe2497f5019511a2587b02f684fec.svg"/>
                <span>Microsoft Excel</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/monday-093821aaa889e3f3c686c8d65ed0512f.svg"/>
                <span>Monday.com</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/google-sheets-fef337dac965d492fcc6f3fc2f23a5eb.svg"/>
                <span>Google Sheets</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/asana-5b3de9ab8d4b3b5be08da2ba57133c59.svg"/>
                <span>Asana</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/wrike-9ec4a5a3b24cdec1d2f751f3c3391110.svg"/>
                <span>Wrike</span>
              </button>
              </div>
              <div style={{display:"flex"}}>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/trello-66af0f41e1112165ba8305c85aee835a.svg"/>
                <span>Trello</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/divvyhq-d4ef6402ed5c5ca143c2b6f47ad60b56.svg"/>
                <span>Divvy HQ</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/jira-50db388f3cf89fdb0b146fbb4c3bab72.svg"/>
                <span>JIRA</span>
              </button>
              <button className="brandButton">
                <img className="brandImg" src="https://app.coschedule.com/img/competitor-tools/csv-e3d09c7a465cbbcebd5f8185ac4e1237.svg"/>
                <span>CSV File</span>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="left_boxes">
            <div style={{color:"#666", display:"flex", justifyContent:"space-between", padding:"10px"}}>
                <h4><span><ImCheckmark/></span> My Upcoming</h4>
                <button onClick={handleAddClick} style={{background:"#d76",color:"white",border:"none",padding:"10px",borderRadius:"5px",display:"flex",justifyContent:"space-between",cursor:"pointer"}}><span><BsPlusLg/></span><span>New Task</span></button>
                
            </div>
             {inputList.map((x,i) => {
              return(
                <div style={{display:"flex"}}>
              <input style={{width: "230px",padding:"10px"}} key={i} onChange={e=>setText(e.target.value)} type="text" placeholder="New Task..."/>
                <button onClick={ () =>
                {
                    handleAddone()
                } }>add</button>
                </div>
            )})}
            {text2.map(t => <div className="ApShow" key={t.id}>{t.note}</div>)}
            
            <hr style={{color:"grey"}}></hr>
            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                <h4 style={{color:"#666"}}>TODAY</h4>
                <BsPlusLg style={{color:"#666"}}/>
            </div>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <div style={{color:"darksalmon",fontWeight:"700"}}>Notifications</div>
          <div style={{color:"#777"}}>Recents</div>
          <div style={{color:"#777"}}>Favourites</div>
        </div>
        <div className="down">
        <img className="bell" src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png"/>
        <h3 style={{fontFamily:"sans-serif"}}>All Caught up !</h3>
        <h5>No new notifications</h5>
        </div>
      </div>
    </div>
  );
};
