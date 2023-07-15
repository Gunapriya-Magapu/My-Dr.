// faq.js
// import React, { useState } from "react";
// import {AiOutlineMinus,AiOutlinePlus} from  "react-icons/ai";
//import "./faq.css";


// const FAQ = () => {
// //   const [expanded, setExpanded] = useState({});
//     const [questions ,setQuestions]=useState({});
//   const questionsArray = [
//     {
//       id: 1,
//       title: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       id: 2,
//       title: "How does React work?",
//       answer: "React works by creating a virtual DOM and then updating the real DOM only when necessary.",
//     },
//     {
//       id: 3,
//       title: "What are the benefits of using React?",
//       answer: "The benefits of using React include its performance, its flexibility, and its large community of developers.",
//     },
//   ];

//   const SingleQuestion=({title ,info})=>
// {
//     const [showInfo,setShowInfo]=useState(false);
//     return(
//       <article className="question">
//         <header>
//           <h4>{title}</h4>
//            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
//               {showInfo ?<AiOutlinePlus /> :<AiOutlineMinus/>}
//             </button>
//         </header>
//         {showInfo && <p>{info}</p>}
//       </article>
//     );
// };

//   return (
    // <div>
    //   {questionsArray.map((question) => (
    //     <div key={question.id}>
    //       <h3>{question.title}</h3>
    //       <button
    //         onClick={() => setExpanded(expanded => ({ ...expanded, [question.id]: !expanded[question.id] }))}
    //       >
    //         {expanded[question.id] ? "-" : "+"}
    //       </button>
    //       <p
    //         style={{
    //           display: expanded[question.id] ? "block" : "none",
    //         }}
    //       >
    //         {question.answer}
    //       </p>
    //     </div>
    //   ))}
    // </div>





//     <main>
//         <div className="container">
//             <h3>React Question and Answer</h3>
//             <section>
//                 {questions.map((question)=>
//                 {
//                     return <SingleQuestion key={question.id} {...question}/>;
//                 })}
//             </section>
//         </div>
//     </main>

//   );
// };

// export default FAQ;

// import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const FAQ = () => {
//   const [expanded, setExpanded] = useState({});
//   const questionsArray = [
//     {
//       id: 1,
//       title: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       id: 2,
//       title: "How does React work?",
//       answer: "React works by creating a virtual DOM and then updating the real DOM only when necessary.",
//     },
//     {
//       id: 3,
//       title: "What are the benefits of using React?",
//       answer: "The benefits of using React include its performance, its flexibility, and its large community of developers.",
//     },
//   ];

//   return (
//     <div>
//       {questionsArray.map((question) => (
//         <div key={question.id}>
//           <h3>{question.title}</h3>
//           <button
//             onClick={() => setExpanded(expanded => ({ ...expanded, [question.id]: !expanded[question.id] }))}
//           >
//             {expanded[question.id] ? "-" : "+"}
//           </button>
//           <p
//             style={{
//               display: expanded[question.id] ? "block" : "none",
//             }}
//           >
//             {question.answer}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;


import React,{useState} from "react";
import data from "./data";
import "./faq.css";
import {AiOutlineMinus,AiOutlinePlus} from  "react-icons/ai";

const FAQ = () => {

 
  const [questions ,setQuestions]=useState(data);

const SingleQuestion=({title ,info})=>
{
  const [showInfo,setShowInfo]=useState(false);
  return(
  <article className="question">
    <header>
      <h4  style={{letterSpacing:"0.1rem",textTransform:"capitalize",lineHeight: "1.25",marginBottom: "0.75rem"}}>{title}</h4>
        <button className="btns" onClick={()=>setShowInfo(!showInfo)}>
          {showInfo ?<AiOutlinePlus /> :<AiOutlineMinus/>}
        </button>
    </header>
    {showInfo && <p style={{ marginBottom:"1.25rem",color:"hsl(209,61%,16%)"}}>{info}</p>}
  </article>
  );
};

return(
  <main className="example">
      <div className="container1">
          <h3>Frequently asked Questions</h3>
          <section>
              {questions.map((question)=>
              {
                  return <SingleQuestion key={question.id} {...question}/>;
              })}
          </section>
      </div>
  </main>
);
};

export default FAQ;