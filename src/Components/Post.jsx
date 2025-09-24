import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <div className="card w-[500px] h-[250px] bg-slate-200 card-md shadow-sm ">
        <div className="card-body">
          <img className="w-[80px] rounded-full" src={post.userImg} alt="" />
          <h2 className="card-title">{post.requestedBy}</h2>
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-semibold ">{post.subject}</h1>
            <div>
              <span className={` ${post.priority=="High" && "bg-red-200 text-red-500 font-bold"  } 
              ${post.priority=="Medium" && "bg-yellow-200 text-yellow-800 font-bold" }
              ${post.priority=="Low" && "bg-teal-200 text-teal-700 font-bold" }
              
              
              
              text-red-400 py-1 px-2 mr-2 rounded-[5px]`}>
                {post.priority}
              </span>
              <span className="bg-amber-500 py-1 px-2 rounded-[5px]">{post.status}</span>
            </div>
          </div>
          <p>{post.description}</p>
          <div className="justify-end card-actions"></div>
        </div>
      </div>
    </>
  );
};

export default Post;

// assignedTo
// :
// "Agent001"
// category
// :
// "Authentication"
// createdAt
// :
// "2025-09-20T10:15:00Z"
// description
// :
// "User forgot password and needs a reset."
// priority
// :
// "High"
// requestedBy
// :
// "Jhankar Mahbub"
// status
// :
// "Submitted"
// subject
// :
// "Password reset request"
// ticketId
// :
// "PH-2001"
// userImg
// :
