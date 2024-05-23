import './App.css';
import { postApi } from './store/services/postApi';
import Posts from './components/Posts'
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx'

function App() {
  const {data: posts} = postApi.useGetPostsQuery('')
  const {data: PostData} = postApi.useGetPostsQuery('')


  
  return (
    <div>
  
{/* <Posts/> */}

<RegistrationForm/>
    </div>
  );
}

export default App;
