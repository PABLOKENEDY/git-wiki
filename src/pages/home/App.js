import logo from '../../styles/logo.svg'
import { Container } from './styles';
import Input from '../../components/Input'
import Button from '../../components/Button'
import ItemRepos from '../../components/ItemRepos';
import {api} from '../../services/api';
import { useState } from 'react';

function App (){

  const [currentRepo, setcurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){

        const isExist = repos.find(repo => repo.id === data.id)

        if(!isExist){
          setRepos(prev => [...prev, data]);
          setcurrentRepo('')
          return
        }
      
      }
      alert('Repositório Não Encontrado')
  }

    const handleRemoveRepo = (id) =>{
     // TODO :
    }
  return (

  <Container>
      <img  width={250}  height={250} src={logo}/>
    <Input value={currentRepo} onChange={(e) => setcurrentRepo(e.target.value)}/>
    <Button onClick={handleSearchRepo} />
    {repos.map(repo => <ItemRepos handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    
  </Container>

  );
}

export default App;