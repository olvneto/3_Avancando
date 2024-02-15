/* eslint-disable react/prop-types */

const UserDetails = ({name, age, job}) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      <p>{(age >= 18) ? "Pode tirar carteira" : "Muito jovem ainda para tirar a CNH."}</p>
    </div>    
  );
}

export default UserDetails