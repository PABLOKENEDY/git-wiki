import React from "react";
import { ItemContainer
} from './styles';
function ItemRepos({repo , handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return(
        <ItemContainer onclick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="black"> Ver repositório</a> <br />
        <a href=" onclick={handleRemove}" className="remover"> Remover</a>
        <hr />
        </ItemContainer>
    )
}

export default ItemRepos;