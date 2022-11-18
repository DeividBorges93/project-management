function validateName(user) {
  const min = 8;
  
  if (!user.name) return { type: 'error', message: 'Erro: necessário preencher o campo "name"!' };

  if (user.name.lenght < min) return { type: 'error', message: `Erro: "name" precisa ter no mínimo ${min} caracteres` }
};

function validateUsername(user) {
  const min = 8;
  
  if (!user.username) return { type: 'error', message: 'Erro: necessário preencher o campo "username"!' };

  if (user.username.lenght < min) return { type: 'error', message: `Erro: "username" precisa ter no mínimo ${min} caracteres` }
};

const validateUser = async (user) => {
  return (
    validateName(user),
    validateUsername(user)
)};

export default validateUser;
