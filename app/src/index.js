import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className= "ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author = "Person1" time= "Today at 6:00PM" text="This blog is nice nr1" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author = "Person2" time= "Today at 7:00PM" text="This blog is nice nr2" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author = "Person3" time= "Today at 8:00PM" text="This blog is nice nr3" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
