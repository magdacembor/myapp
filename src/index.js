import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Sam' 
          timeAgo='Today at 4pm' 
          title='Awesome'
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Ben' 
          timeAgo='Today at 6pm' 
          title='Hey hey'
          avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
          author='Alex' 
          timeAgo='Yesterday at 10pm' 
          title='Bacon!'
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



// const App = () => {
//   const buttonText = { text: 'Click Me!' };
//   const style = {backgroundColor: 'blue', color: 'white'};

//   return (
//     <div>
//       <label className="name" htmlFor="name">Enter name:</label>
//       <input id="name" type="text" />
//       <button style={style}>{buttonText.text}</button>
//     </div>
//   )
// }
