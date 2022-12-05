import { PromiseProvider } from "mongoose";

import DogImage from "./ProfileImage";

import User from './User';

import TimeStamp from "./Timestamp";

import Message from './Message';

import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <DogImage user={tweet.user} />
      <div className="body">
        <div className="top">

      <User tweet={tweet}/>

          <TimeStamp tweet={tweet}/>
          
        </div>

      <Message tweet={tweet}/>

    <Actions tweet={tweet}/>
      </div>
    </div>
  );
}

export default Tweet;
